import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getHistoryTTN } from 'reduxe/selectors';
import { clearHistory } from 'reduxe/sliceHistoryTTN';
import useCloseHistory from 'hooks/useCloseHistory';
import {
  WrapHistoryDocuments,
  FiledHistoryDocuments,
  List,
  Item,
  Button,
} from './HistoryDocuments.styled';
import { AiOutlineClear } from 'react-icons/ai';
import { useEffect } from 'react';

const HistoryDocuments = ({ className, handlerClichHistory }) => {
  const dispatcher = useDispatch();
  const historyTTN = useSelector(getHistoryTTN);
  const [isCloseHistory] = useCloseHistory();

  const navigate = useNavigate();
  const { documentId } = useParams();

  useEffect(() => {
    if (isCloseHistory) handlerClichHistory(true);
  }, [isCloseHistory, handlerClichHistory]);

  const handlerOnClick = numDoc => {
    handlerClichHistory(true);
    navigate(`/documents/${numDoc}`);
  };

  const handlerClearHistory = () => {
    dispatcher(clearHistory());
    navigate(`/documents`);
  };

  return (
    <WrapHistoryDocuments id="historyDocuments" className={className}>
      <FiledHistoryDocuments>
        <h2>Історія</h2>
        {historyTTN.length > 0 && (
          <>
            <List>
              {historyTTN.map(number => {
                return (
                  <Item
                    key={number}
                    className={number === documentId ? 'Active' : ''}
                    onClick={() => handlerOnClick(number)}
                  >
                    {number}
                  </Item>
                );
              })}
            </List>
            <Button type="buttom" onClick={handlerClearHistory}>
              <AiOutlineClear size="16" />
            </Button>
          </>
        )}
      </FiledHistoryDocuments>
    </WrapHistoryDocuments>
  );
};

export default HistoryDocuments;
