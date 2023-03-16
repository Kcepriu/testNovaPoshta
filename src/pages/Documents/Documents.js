import { useState, useEffect } from 'react';

import { IoIosHourglass } from 'react-icons/io';

import SearchTTN from 'components/SearchTTN/SearchTTN';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import WarningInformation from 'components/WarningInformation/WarningInformation';
import Spinner from 'components/Spinner/Spinner';
import {
  WrapInformation,
  ButtonShowHistory,
  WrapSearch,
} from './Documents.styled';
import useDocument from 'hooks/useDocument';
import useCloseHistory from 'hooks/useCloseHistory';

const Documents = () => {
  const [informationTTN, warning, showLoad] = useDocument();

  //Show- hidden history element
  const [hidenHistory, setHidenHistory] = useState(true);
  const [isCloseHistory] = useCloseHistory();

  useEffect(() => {
    setHidenHistory(true);
  }, [isCloseHistory]);

  const handlerShowHideHistory = () => {
    setHidenHistory(prev => !prev);
  };

  // * Returns
  return (
    <>
      <WrapSearch>
        <SearchTTN />
        <ButtonShowHistory
          type="button"
          id="buttonHistoryDocuments"
          onClick={handlerShowHideHistory}
          size="16"
        >
          <IoIosHourglass />
        </ButtonShowHistory>
      </WrapSearch>

      <WarningInformation information={warning} />

      <WrapInformation>
        <StatusDocument informationTTN={informationTTN} />
        <HistoryDocuments
          className={hidenHistory ? 'hiden' : ''}
          handlerClichHistory={setHidenHistory}
        />
      </WrapInformation>

      {showLoad && <Spinner />}
    </>
  );
};

export default Documents;
