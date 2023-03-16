import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getHistoryTTN } from 'reduxe/selectors';
import { clearHistory } from 'reduxe/sliceHistoryTTN';
import { urlDocuments } from 'helpers/constatnRoutes';
import {
  WrapHistoryDocuments,
  FiledHistoryDocuments,
  List,
  Item,
  Button,
} from './HistoryDocuments.styled';
import { AiOutlineClear } from 'react-icons/ai';

const HistoryDocuments = ({ className, handlerClichHistory }) => {
  const dispatcher = useDispatch();
  const historyTTN = useSelector(getHistoryTTN);

  const navigate = useNavigate();
  const { documentId } = useParams();

  const handlerOnClick = numDoc => {
    navigate(`${urlDocuments}/${numDoc}`);
    handlerClichHistory(true);
  };

  const handlerClearHistory = () => {
    dispatcher(clearHistory());
    navigate(`${urlDocuments}`);
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
HistoryDocuments.propTypes = {
  className: PropTypes.string.isRequired,
  handlerClichHistory: PropTypes.func.isRequired,
};

export default HistoryDocuments;
