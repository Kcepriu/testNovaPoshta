import PropTypes from 'prop-types';
import {
  WrapHistoryDocuments,
  List,
  Item,
  Button,
} from './HistoryDocuments.styled';
import { AiOutlineClear } from 'react-icons/ai';

const HistoryDocuments = ({
  historyTTN,
  activeTTN,
  handlerOnClick,
  handlerClearHistory,
}) => {
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
                  className={number === activeTTN ? 'Active' : ''}
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
  handlerOnClick: PropTypes.func.isRequired,
  handlerClearHistory: PropTypes.func.isRequired,
};

export default HistoryDocuments;
