import { useState, useEffect } from 'react';
import { getWarehouseTypes } from 'servises/apiNovaPoshta';

const useFilter = () => {
  const [filters, setFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [isLoader, setIsLoader] = useState(false);

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

  return [filters, activeFilter, isLoader, setActiveFilter];
};

export default useFilter;
