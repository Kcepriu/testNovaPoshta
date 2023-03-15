import { useState } from 'react';
import SearchTTN from 'components/SearchTTN/SearchTTN';
import HistoryDocuments from 'components/HistoryDocuments/HistoryDocuments';
import StatusDocument from 'components/StatusDocument/StatusDocument';
import WarningInformation from 'components/WarningInformation/WarningInformation';
import Spinner from 'components/Spinner/Spinner';
import { WrapInformation } from './Documents.styled';
import useDocument from 'hooks/useDocument';

const Documents = () => {
  const [informationTTN, warning, showLoad] = useDocument();
  const [hidenHistory, setHidenHistory] = useState(true);

  const handlerShowHideHistory = () => {
    setHidenHistory(prev => !prev);
  };

  //32154654654564

  // * Returns
  return (
    <>
      <SearchTTN />

      <WarningInformation information={warning} />

      <button type="button" onClick={handlerShowHideHistory}>
        Show history
      </button>

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
