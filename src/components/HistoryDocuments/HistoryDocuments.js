import PropTypes from 'prop-types';
import { WrapHistoryDocuments, List, Item } from './HistoryDocuments.styled';

const HistoryDocuments = ({ historyTTN, activeTTN, handlerOnClick }) => {
  return (
    <WrapHistoryDocuments>
      {historyTTN.length > 0 && (
        <>
          <h2>Історія</h2>
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
        </>
      )}
    </WrapHistoryDocuments>
  );
};

HistoryDocuments.propTypes = {
  historyTTN: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handlerOnClick: PropTypes.func.isRequired,
};

export default HistoryDocuments;
