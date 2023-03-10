import SearchCity from 'components/SearchCity/SearchCity';
import { useState } from 'react';

const Warehouses = () => {
  const [foundCitys, setFoundCitys] = useState([]);

  return (
    <>
      <p>Warehouses</p>
      <SearchCity handlerFoundCity={setFoundCitys} />
    </>
  );
};

export default Warehouses;
