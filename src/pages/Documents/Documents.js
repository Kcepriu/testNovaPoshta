import { useEffect, useState } from 'react';

import GetInformationDocument from 'components/GetInformationDocument/GetInformationDocument';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import Loader from 'components/Loader/Loader';
import { fetchInformationDocument } from 'servises/apiNovaPoshta';
import WarningInformation from 'components/WarningInformation/WarningInformation';

const Documents = () => {
  //number TTN for serch
  const [numberTTN, setNumberTTN] = useState('');

  //Number active TTN
  const [activeTTN, setActiveTTN] = useState('');

  // History found TTN
  const [historyTTN, setHistoryTTN] = useState([]);

  // Information ALL TTN
  const [informationAllTTN, setInformationAllTTN] = useState({});

  // Information actibe TTN
  const [informationActiveTTN, setInformationActiveTTN] = useState('');

  //Information about fetch information
  const [warning, setWarning] = useState('');

  //Flag show loader
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    setWarning('');
    setActiveTTN('');
    setInformationActiveTTN('');

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
          return [...prev, numberTTN];
        });
        setActiveTTN(numberTTN);
        setInformationAllTTN(prev => {
          return { ...prev, [numberTTN]: respond.data[0] };
        });
        // CAtch
      } catch (Error) {
        setWarning('The service is not available');
        console.log('Error fetch information TTN', Error);
      } finally {
        setShowLoad(false);
      }
    }

    // ! 1. Якщо така ТТН є в хісторі то просто активувати її інакше фетчимо інформацію
    if (informationAllTTN[numberTTN]) {
      console.log('setActiveTTN', numberTTN);

      setActiveTTN(numberTTN);
    } else {
      fetchInformation();
    }
  }, [numberTTN, informationAllTTN]);

  useEffect(() => {
    if (!activeTTN) {
      setInformationActiveTTN('');
      return;
    }

    setInformationActiveTTN(informationAllTTN[activeTTN]);
  }, [activeTTN, informationAllTTN]);
  // 20450669024794

  const handlerSubmitForm = event => {
    event.preventDefault();
    const form = event.target;
    const numberTTN = form.elements.numberTTN.value;
    setNumberTTN(numberTTN);
    form.reset();
  };

  const handlerClickItemHistory = number => {
    setActiveTTN(number);
  };

  return (
    <>
      <p>20450669024794</p>
      <GetInformationDocument handlerSubmitForm={handlerSubmitForm} />
      {warning.length > 0 && <WarningInformation information={warning} />}
      {showLoad && <Loader />}
      {historyTTN.length > 0 && (
        <HistoryDocuments
          historyTTN={historyTTN}
          activeTTN={activeTTN}
          handlerOnClick={handlerClickItemHistory}
        />
      )}
      {informationActiveTTN && (
        <StatusDocument informationTTN={informationActiveTTN} />
      )}
    </>
  );
};

export default Documents;
