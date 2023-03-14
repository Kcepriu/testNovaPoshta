import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import {
  WrapHistoryDocuments,
  List,
  Item,
  Button,
} from './HistoryDocuments.styled';
import { AiOutlineClear } from 'react-icons/ai';

const HistoryDocuments = ({ historyTTN, handlerClearHistory }) => {
  const navigate = useNavigate();
  const { documentId } = useParams();

  const handlerOnClick = numDoc => {
    navigate(`/documents/${numDoc}`);
  };

  return (
    <WrapHistoryDocuments>
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
    </WrapHistoryDocuments>
  );
};

HistoryDocuments.propTypes = {
  historyTTN: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handlerClearHistory: PropTypes.func.isRequired,
};

export default HistoryDocuments;
