import { useEffect, useState } from 'react';

import SearchTTN from 'components/SearchTTN/SearchTTN';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import Loader from 'components/Loader/Loader';
import { fetchInformationDocument } from 'servises/apiNovaPoshta';
import WarningInformation from 'components/WarningInformation/WarningInformation';

const Documents = () => {
  //number TTN for serch
  const [numberTTN, setNumberTTN] = useState('');
  //Flag to loading info
  const [loadInformation, setLoadInformation] = useState(false);
  // History found TTN
  const [historyTTN, setHistoryTTN] = useState([]);
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
      console.log('fetchInformation', Date.now());

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
          return [...prev, numberTTN];
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
    setNumberTTN(number);
    setLoadInformation(true);
  };

  return (
    <>
      <p>20450669024794</p>

      <SearchTTN
        numberTTN={numberTTN}
        setNumberTTN={setNumberTTN}
        handlerSubmitForm={handlerSubmitForm}
      />

      {warning.length > 0 && <WarningInformation information={warning} />}
      {showLoad && <Loader />}

      {historyTTN.length > 0 && (
        <HistoryDocuments
          historyTTN={historyTTN}
          handlerOnClick={handlerClickItemHistory}
        />
      )}
      {informationTTN && <StatusDocument informationTTN={informationTTN} />}
    </>
  );
};

export default Documents;
