import { useState, useEffect } from 'react';
import City from 'components/City/City';
import FilterWarehouses from 'components/FilterWarehouses/FilterWarehouses';
import ListWarehouses from 'components/ListWarehouses/ListWarehouses';
import { fetchWarehouses, getWarehouseTypes } from 'servises/apiNovaPoshta';
import Spinner from 'components/Spinner/Spinner';

const Warehouses = () => {
  const [selectedCity, setSelectedCity] = useState();
  // ! foundWarehouses
  const [foundWarehouses, setFoundWarehouses] = useState([]);

  const [totalWarehouses, setTotalWarehouses] = useState(0);

  const [isLoader, setIsLoader] = useState(false);
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [curentPage, setCurentPage] = useState(1);

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
          typeOfWarehouseRef: activeFilter,
          page: curentPage,
        });

        if (!response?.success) {
          setFoundWarehouses([]);
          setTotalWarehouses(0);
          return;
        }

        if (curentPage === 1) {
          setFoundWarehouses(response.data);
        } else {
          setFoundWarehouses(prev => [...prev, ...response.data]);
        }

        setTotalWarehouses(response.info.totalCount);
      } catch (Error) {
        console.log('Error fetch Warehouses', Error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
  }, [selectedCity, activeFilter, curentPage]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchInformation() {
      setIsLoader(true);
      try {
        const { data: response } = await getWarehouseTypes(controller);

        if (!response?.success) {
          setFilters([]);
          return;
        }

        setFilters(response.data);
        console.log(response.data);

        setTotalWarehouses(response.info.totalCount);
      } catch (Error) {
        console.log('Error fetch filters', Error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
  }, []);

  //* Haandlers

  const handlerChoiceCity = city => {
    setSelectedCity(city);
  };

  const handlerChoiceFilter = ref => {
    setActiveFilter(ref);
  };

  return (
    <>
      <h2>Список відділень міста:</h2>
      <City city={selectedCity} handlerChoiceCity={handlerChoiceCity} />
      {filters.length > 0 && (
        <FilterWarehouses
          filters={filters}
          activeFilter={activeFilter}
          handlerChoiceFilter={handlerChoiceFilter}
        />
      )}

      {foundWarehouses.length > 0 && (
        <ListWarehouses foundWarehouses={foundWarehouses} />
      )}
      {isLoader && <Spinner />}
    </>
  );
};

export default Warehouses;
