import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SearchTTN from 'components/SearchTTN/SearchTTN';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import { fetchInformationDocument } from 'servises/apiNovaPoshta';
import WarningInformation from 'components/WarningInformation/WarningInformation';
import Spinner from 'components/Spinner/Spinner';
import { WrapInformation } from './Documents.styled';
import { addTTN } from 'reduxe/sliceHistoryTTN';
import * as Texts from 'helpers/constantText';

const regexp = /^\d{14}$/;

const Documents = () => {
  const dispatcher = useDispatch();

  //number TTN for serch
  const { documentId: numberTTN = '' } = useParams();

  // Information ALL TTN
  const [informationTTN, setInformationTTN] = useState('');

  //Information about fetch information
  const [warning, setWarning] = useState('');

  //Flag show loader
  const [showLoad, setShowLoad] = useState(false);

  //32154654654564

  useEffect(() => {
    setWarning('');
    setInformationTTN('');

    if (!numberTTN) {
      return;
    }

    if (!regexp.test(numberTTN)) {
      setWarning(Texts.invalidFormat);
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

        if (!response.success) {
          setWarning(Texts.invalidNumber);
          return;
        }

        dispatcher(addTTN(numberTTN));

        setInformationTTN(response.data[0]);
        // CAtch
      } catch (Error) {
        setWarning(Texts.serviceDown);
        // console.log('Error fetch information TTN', Error);
      } finally {
        setShowLoad(false);
      }
    }

    fetchInformation();
  }, [numberTTN, dispatcher]);

  // * Returns
  return (
    <>
      <SearchTTN />

      <WarningInformation information={warning} />

      <WrapInformation>
        <StatusDocument informationTTN={informationTTN} />
        <HistoryDocuments />
      </WrapInformation>
      {showLoad && <Spinner />}
    </>
  );
};

export default Documents;
