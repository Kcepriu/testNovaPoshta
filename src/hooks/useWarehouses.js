import { useState, useEffect } from 'react';
import { fetchWarehouses } from 'servises/apiNovaPoshta';

const useWarehouses = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [foundWarehouses, setFoundWarehouses] = useState([]);

  const [totalWarehouses, setTotalWarehouses] = useState(0);

  const [isLoader, setIsLoader] = useState(false);

  const [curentPage, setCurentPage] = useState(1);

  const [activeFilter, setActiveFilter] = useState('');

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

  return [
    selectedCity,
    foundWarehouses,
    isLoader,
    totalWarehouses,
    curentPage,
    setCurentPage,
    setSelectedCity,
    setActiveFilter,
  ];
};

export default useWarehouses;
