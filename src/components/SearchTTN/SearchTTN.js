import PropTypes from 'prop-types';

const SearchTTN = ({ numberTTN, setNumberTTN, handlerSubmitForm }) => {
  const handlerChangeInput = evn => {
    setNumberTTN(evn.target.value);
  };

  return (
    <>
      <form onSubmit={handlerSubmitForm}>
        <input
          name="numberTTN"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Input number TTN"
          value={numberTTN}
          onChange={handlerChangeInput}
        />

        <button type="submit">Get status TTN</button>
      </form>
    </>
  );
};

SearchTTN.propTypes = {
  numberTTN: PropTypes.string.isRequired,
  setNumberTTN: PropTypes.func.isRequired,
  handlerSubmitForm: PropTypes.func.isRequired,
};

export default SearchTTN;
