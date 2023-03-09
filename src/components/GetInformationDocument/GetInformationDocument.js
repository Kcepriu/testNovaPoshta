import PropTypes from 'prop-types';

const GetInformationDocument = ({ handlerSubmitForm }) => {
  return (
    <>
      <form onSubmit={handlerSubmitForm}>
        <input
          name="numberTTN"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Input number TTN"
        />

        <button type="submit">Get status TTN</button>
      </form>
    </>
  );
};

GetInformationDocument.propTypes = {
  handlerSubmitForm: PropTypes.func.isRequired,
};

export default GetInformationDocument;
