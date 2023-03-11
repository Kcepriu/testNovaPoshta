import { useState, useEffect } from 'react';
import City from 'components/City/City';
import FilterWarehouses from 'components/FilterWarehouses/FilterWarehouses';
import ListWarehouses from 'components/ListWarehouses/ListWarehouses';

const Warehouses = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [foundWarehouses, setFoundWarehouses] = useState([]);

  useEffect(() => {
    //При зміні city  знайти список точок відправлення
    if (!selectedCity) {
      setFoundWarehouses([]);
      return;
    }
  }, [selectedCity]);

  //* Haandlers

  const handlerChoiceCity = city => {
    setSelectedCity(city);
  };

  return (
    <>
      <h2>Список відділень міста:</h2>
      <City city={selectedCity} handlerChoiceCity={handlerChoiceCity} />
      <FilterWarehouses />

      {foundWarehouses.length > 0 && <ListWarehouses />}
    </>
  );
};

export default Warehouses;
