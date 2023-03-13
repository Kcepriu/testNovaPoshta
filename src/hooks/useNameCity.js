import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNameCity } from 'servises/apiNovaPoshta';

const useNameCity = () => {
  const [selectedCity, setSelectedCity] = useState();
  const { cityId } = useParams();

  useEffect(() => {
    //При зміні city  знайти список точок відправлення
    if (!cityId) {
      setSelectedCity();
      return;
    }

    const controller = new AbortController();

    async function fetchInformation() {
      try {
        const { data: response } = await fetchNameCity(controller, cityId);

        if (!response?.success) {
          setSelectedCity();
          return;
        }
        //! fdhfdg
        setSelectedCity({
          ref: cityId,
          name: response.data[0].Description,
        });
      } catch (Error) {
        if (Error.code !== 'ERR_CANCELED')
          console.log('Error fetch Name City', Error);
      }
    }

    fetchInformation();

    return () => {
      controller.abort();
    };
  }, [cityId]);

  return [selectedCity];
};

export default useNameCity;
