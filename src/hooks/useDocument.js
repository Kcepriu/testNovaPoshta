import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInformationDocument } from 'servises/apiNovaPoshta';
import { addTTN } from 'reduxe/sliceHistoryTTN';
import * as Texts from 'helpers/constantText';
import { regexpValidation } from 'helpers/constants';

const useDocument = () => {
  const dispatcher = useDispatch();
  //number TTN for serch
  const { documentId: numberTTN = '' } = useParams();

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

    if (!regexpValidation.test(numberTTN)) {
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
      } finally {
        setShowLoad(false);
      }
    }

    fetchInformation();
  }, [numberTTN, dispatcher]);

  return [informationTTN, warning, showLoad];
};

export default useDocument;
