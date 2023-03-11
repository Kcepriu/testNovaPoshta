import { useEffect, useState } from 'react';
import { searchCity } from 'servises/apiNovaPoshta';

const useSearchCity = () => {
  const [nameCity, setNameCity] = useState('');
  const [foundCities, setFoundCities] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setFoundCities([]);

    if (!nameCity) return;

    const controller = new AbortController();

    async function fetchSearchCity() {
      setIsLoader(true);
      try {
        const { data: response } = await searchCity(controller, nameCity);

        if (!response?.success) {
          setFoundCities([]);
          return;
        }
        setFoundCities(response.data[0].Addresses);
      } catch (Error) {
        console.log('Error fetch foud city', Error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchSearchCity();

    return () => {
      controller.abort();
    };
  }, [nameCity]);

  return [foundCities, isLoader, setNameCity];
};

export default useSearchCity;
