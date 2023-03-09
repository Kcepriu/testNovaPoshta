import PropTypes from 'prop-types';

const HistoryDocuments = ({ historyTTN, activeTTN, handlerOnClick }) => {
  return (
    <>
      <p>Історія</p>
      <ul>
        {historyTTN.map(number => {
          return (
            <li
              key={number}
              className={number === activeTTN ? 'Active' : ''}
              onClick={() => handlerOnClick(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

HistoryDocuments.propTypes = {
  historyTTN: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeTTN: PropTypes.string.isRequired,
  handlerOnClick: PropTypes.func.isRequired,
};

export default HistoryDocuments;
