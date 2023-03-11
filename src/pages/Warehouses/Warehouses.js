import City from 'components/City/City';
import FilterWarehouses from 'components/FilterWarehouses/FilterWarehouses';
import ListWarehouses from 'components/ListWarehouses/ListWarehouses';
import { useState } from 'react';

const Warehouses = () => {
  const [selectedCity, setSelectedCity] = useState();

  const handlerChoiceCity = city => {
    setSelectedCity(city);
  };

  //При зміні city  знайти список точок відправлення
  return (
    <>
      <h2>Список відділень міста:</h2>
      <City city={selectedCity} handlerChoiceCity={handlerChoiceCity} />
      <FilterWarehouses />
      <ListWarehouses />
    </>
  );
};

export default Warehouses;
