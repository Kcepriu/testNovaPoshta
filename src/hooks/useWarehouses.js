import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchWarehouses } from 'servises/apiNovaPoshta';
import useNameCity from './useNameCity';

const useWarehouses = () => {
  const [searchParams] = useSearchParams();

  const [selectedCity] = useNameCity();

  const [foundWarehouses, setFoundWarehouses] = useState([]);

  const [totalWarehouses, setTotalWarehouses] = useState(0);

  const [isLoader, setIsLoader] = useState(false);

  const [curentPage, setCurentPage] = useState(1);

  const [activeFilter, setActiveFilter] = useState('');

  const [nameSearchWarehouses, setNameSearchWarehouses] = useState('');

  const page = searchParams.get('page');
  const search = searchParams.get('search');
  const filter = searchParams.get('filter');

  useEffect(() => {
    setCurentPage(page ? page : '1');
  }, [page]);

  useEffect(() => {
    setNameSearchWarehouses(search);
  }, [search]);

  useEffect(() => {
    setActiveFilter(filter);
  }, [filter]);

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
          searchText: nameSearchWarehouses,
        });

        if (!response?.success) {
          setFoundWarehouses([]);
          setTotalWarehouses(0);
          return;
        }

        setFoundWarehouses(response.data);
        setTotalWarehouses(response.info.totalCount);
      } catch (Error) {
        if (Error.code !== 'ERR_CANCELED')
          console.log('Error fetch Warehouses', Error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
  }, [selectedCity, activeFilter, curentPage, nameSearchWarehouses]);

  return [
    selectedCity,
    foundWarehouses,
    isLoader,
    totalWarehouses,
    curentPage,
    setActiveFilter,
  ];
};

export default useWarehouses;
