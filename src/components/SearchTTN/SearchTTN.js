import PropTypes from 'prop-types';
import { Form, Buttom, Input } from './SearchTTN.styled';

const SearchTTN = ({ numberTTN, setNumberTTN, handlerSubmitForm }) => {
  const handlerChangeInput = evn => {
    setNumberTTN(evn.target.value);
  };

  return (
    <>
      <h2>Пошук накладної</h2>
      <Form onSubmit={handlerSubmitForm}>
        <Input
          name="numberTTN"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Введіть номер ТТН"
          value={numberTTN}
          onChange={handlerChangeInput}
        />

        <Buttom type="submit">Отримати статус</Buttom>
        <p>20450669024794</p>
      </Form>
    </>
  );
};

SearchTTN.propTypes = {
  numberTTN: PropTypes.string.isRequired,
  setNumberTTN: PropTypes.func.isRequired,
  handlerSubmitForm: PropTypes.func.isRequired,
};

export default SearchTTN;
