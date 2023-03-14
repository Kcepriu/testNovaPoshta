import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SearchTTN from 'components/SearchTTN/SearchTTN';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import { fetchInformationDocument } from 'servises/apiNovaPoshta';
import WarningInformation from 'components/WarningInformation/WarningInformation';
import Spinner from 'components/Spinner/Spinner';
import { WrapInformation } from './Documents.styled';
import useHistory from 'hooks/useHistory';

const regexp = /^\d{14}$/;

const Documents = () => {
  //number TTN for serch
  const { documentId: numberTTN = '' } = useParams();

  // History found TTN
  const [historyTTN, setHistoryTTN] = useHistory();

  // Information ALL TTN
  const [informationTTN, setInformationTTN] = useState('');

  //Information about fetch information
  const [warning, setWarning] = useState('');

  //Flag show loader
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    setWarning('');
    setInformationTTN('');

    if (!numberTTN) {
      return;
    }
    //todo Верифікувати

    if (!regexp.test(numberTTN)) {
      console.log(numberTTN);
      console.log('ERR');

      setWarning('Не вірний формат');

      return;
    }

    const controller = new AbortController();

    async function fetchInformation() {
      setShowLoad(true);

      try {
        const { data: response } = await fetchInformationDocument(
          controller,
          numberTTN
        );

        //!Треба дивитися чи знайшов документ. Якщо ні, то ругнутися і не додавати в історію
        // Error
        if (!response.success) {
          setWarning(response.errors[0]);
          return;
        }

        setHistoryTTN(prev => {
          if (prev.includes(numberTTN)) return [...prev];
          return [numberTTN, ...prev];
        });

        setInformationTTN(response.data[0]);
        // CAtch
      } catch (Error) {
        setWarning('The service is not available');
        console.log('Error fetch information TTN', Error);
      } finally {
        setShowLoad(false);
      }
    }

    fetchInformation();
  }, [numberTTN, setHistoryTTN]);

  // * Handlers
  const handlerClearHistory = () => {
    setHistoryTTN([]);
  };

  // * Returns
  return (
    <>
      <SearchTTN />

      <WarningInformation information={warning} />

      <WrapInformation>
        <StatusDocument informationTTN={informationTTN} />
        <HistoryDocuments
          historyTTN={historyTTN}
          handlerClearHistory={handlerClearHistory}
        />
      </WrapInformation>
      {showLoad && <Spinner />}
    </>
  );
};

export default Documents;
