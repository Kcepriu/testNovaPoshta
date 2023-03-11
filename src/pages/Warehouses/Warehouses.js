import { useState, useEffect } from 'react';
import City from 'components/City/City';
import FilterWarehouses from 'components/FilterWarehouses/FilterWarehouses';
import ListWarehouses from 'components/ListWarehouses/ListWarehouses';
import { fetchWarehouses } from 'servises/apiNovaPoshta';
import Spinner from 'components/Spinner/Spinner';

const Warehouses = () => {
  const [selectedCity, setSelectedCity] = useState();
  // ! foundWarehouses
  const [foundWarehouses, setFoundWarehouses] = useState([]);
  const [totalWarehouses, setTotalWarehouses] = useState(0);

  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    //При зміні city  знайти список точок відправлення
    if (!selectedCity) {
      setFoundWarehouses([]);
      setTotalWarehouses(0);
      return;
    }

    const controller = new AbortController();

    async function fetchInformation() {
      setIsLoader(true);
      try {
        const { data: response } = await fetchWarehouses({
          controller,
          cityRef: selectedCity.ref,
          typeOfWarehouseRef: '',
          page: 1,
        });

        if (!response?.success) {
          setFoundWarehouses([]);
          setTotalWarehouses(0);
          return;
        }

        setFoundWarehouses(response.data);
        console.log(response.data);

        setTotalWarehouses(response.info.totalCount);
      } catch (Error) {
        console.log('Error fetch foud city', Error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
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

      {foundWarehouses.length > 0 && (
        <ListWarehouses foundWarehouses={foundWarehouses} />
      )}
      {isLoader && <Spinner />}
    </>
  );
};

export default Warehouses;
