import { useEffect, useState } from 'react';

import SearchTTN from 'components/SearchTTN/SearchTTN';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import { fetchInformationDocument } from 'servises/apiNovaPoshta';
import WarningInformation from 'components/WarningInformation/WarningInformation';
import Spinner from 'components/Spinner/Spinner';
import { WrapInformation } from './Documents.styled';

const Documents = () => {
  //number TTN for serch
  const [numberTTN, setNumberTTN] = useState('');
  //Flag to loading info
  const [loadInformation, setLoadInformation] = useState(false);
  // History found TTN
  const [historyTTN, setHistoryTTN] = useState([
    '20450669024794',
    '20450669024700',
    '20450669024702',
    '20450669024703',
    '20450669024704',
    '20450669024705',
    '20450669024706',
    '20450669024707',
  ]);
  // Information ALL TTN
  const [informationTTN, setInformationTTN] = useState('');
  //Information about fetch information
  const [warning, setWarning] = useState('');

  //Flag show loader
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    setWarning('');
    setInformationTTN('');

    if (!loadInformation) {
      return;
    }

    setLoadInformation(false);
    if (numberTTN === '') {
      return;
    }

    const controller = new AbortController();

    async function fetchInformation() {
      setShowLoad(true);

      try {
        const { data: respond } = await fetchInformationDocument(
          controller,
          numberTTN
        );

        //!Треба дивитися чи знайшов документ. Якщо ні, то ругнутися і не додавати в історію

        // Error
        if (!respond.success) {
          setWarning(respond.errors[0]);
          return;
        }

        setHistoryTTN(prev => {
          if (prev.includes(numberTTN)) return [...prev];
          return [numberTTN, ...prev];
        });

        setInformationTTN(respond.data[0]);
        // CAtch
      } catch (Error) {
        setWarning('The service is not available');
        console.log('Error fetch information TTN', Error);
      } finally {
        setShowLoad(false);
      }
    }

    fetchInformation();
  }, [numberTTN, loadInformation]);

  const handlerSubmitForm = event => {
    event.preventDefault();
    setLoadInformation(true);
  };

  const handlerClickItemHistory = number => {
    if (numberTTN === number) return;
    setNumberTTN(number);
    setLoadInformation(true);
  };

  return (
    <>
      <SearchTTN
        numberTTN={numberTTN}
        setNumberTTN={setNumberTTN}
        handlerSubmitForm={handlerSubmitForm}
      />

      <WarningInformation information={warning} />

      <WrapInformation>
        <StatusDocument informationTTN={informationTTN} />
        <HistoryDocuments
          historyTTN={historyTTN}
          activeTTN={numberTTN}
          handlerOnClick={handlerClickItemHistory}
        />
      </WrapInformation>
      {showLoad && <Spinner />}
    </>
  );
};

export default Documents;
