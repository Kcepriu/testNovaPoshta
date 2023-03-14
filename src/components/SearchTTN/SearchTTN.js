import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Buttom, Input } from './SearchTTN.styled';
import * as Texts from 'helpers/constantText';

const SearchTTN = () => {
  const navigate = useNavigate();
  const { documentId = '' } = useParams();

  const [numberTTN, setNumberTTN] = useState(documentId);

  useEffect(() => {
    setNumberTTN(documentId);
  }, [documentId]);

  const handlerChangeInput = evn => {
    setNumberTTN(evn.target.value);
  };

  const handlerSubmitForm = event => {
    //^\d{14}$
    //^[A-Z]{4}\d{10}[A-Z]{3}$
    event.preventDefault();
    const numDoc = event.target.elements.numberTTN.value;
    navigate(`/documents/${numDoc}`);
  };

  return (
    <>
      <h2>{Texts.searchInvoice}</h2>
      <Form onSubmit={handlerSubmitForm}>
        <Input
          name="numberTTN"
          type="text"
          autoComplete="on"
          autoFocus
          placeholder={Texts.enterNumber}
          // defaultValue={documentId}
          value={numberTTN}
          onChange={handlerChangeInput}
        />

        <Buttom type="submit">{Texts.getStatus}</Buttom>
      </Form>
    </>
  );
};

export default SearchTTN;
