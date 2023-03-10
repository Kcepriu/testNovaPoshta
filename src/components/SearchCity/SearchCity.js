import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';
import { searchCity } from 'servises/apiNovaPoshta';

const SearchCity = ({ handlerFoundCity }) => {
  const [nameCity, setNameCity] = useState('');

  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    console.log('nameCityFromSearch', Date.now());

    if (!nameCity) return;
    const controller = new AbortController();

    async function fetchSearchCity() {
      try {
        const { data: response } = await searchCity(controller, nameCity);

        if (!response?.success) {
          handlerFoundCity([]);
          return;
        }
        handlerFoundCity(response.data[0].Addresses);
      } catch (Error) {
        console.log('Error fetch foud city', Error);
      }
    }

    fetchSearchCity();

    return () => {
      controller.abort();
    };
  }, [nameCity, handlerFoundCity]);

  const debouncedChangeCity = useDebouncedCallback(value => {
    setNameCity(value);
  }, 1000);

  const toogleIsSearch = () => {
    setIsSearch(prev => !prev);
  };

  return (
    <>
      <form>
        <label>
          Введіть місто
          <input
            name="nameCity"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Назва міста"
            onChange={e => debouncedChangeCity(e.target.value)}
          />
        </label>
      </form>

      <p>Місто</p>
      <div>
        <div onClick={toogleIsSearch}>Отут буде назва міста</div>
        {isSearch && (
          <>
            <p>Рядок пошуку міста</p>
            <ul>
              <li>Місто 1</li>
              <li>Місто 2</li>
              <li>Місто 3</li>
              <li>Місто 4</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
};
SearchCity.propTypes = {
  handlerFoundCity: PropTypes.func.isRequired,
};

export default SearchCity;
