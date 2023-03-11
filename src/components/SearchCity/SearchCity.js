import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { useDebouncedCallback } from 'use-debounce';
import { searchCity } from 'servises/apiNovaPoshta';

import { WrapSearchCity } from './SearchCity.styled';
import FoundCities from 'components/FoundCities/FoundCities';
import Loader from 'components/Loader/Loader';

const SearchCity = ({
  descriptionCity,
  handlerCloseSearch,
  handlerChoiceCity,
}) => {
  const [nameCity, setNameCity] = useState('');
  const [foundCities, setFoundCities] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    //For close this element
    const handlerKeyDownESC = event => {
      // key press esc Close modal
      if (event.key === 'Escape') handlerCloseSearch(false);
    };

    const handlerClickBody = event => {
      if (event.target.closest('#descriptionCity')) return;
      if (event.target.closest('#searchCity')) return;
      handlerCloseSearch(false);
    };

    window.addEventListener('keydown', handlerKeyDownESC);
    document.body.addEventListener('click', handlerClickBody);

    return () => {
      window.removeEventListener('keydown', handlerKeyDownESC);
      document.body.removeEventListener('click', handlerClickBody);
    };
  }, [handlerCloseSearch]);

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

  // * Handlers

  const debouncedChangeCity = useDebouncedCallback(value => {
    setNameCity(value);
  }, 1000);

  return (
    <WrapSearchCity>
      <p>{descriptionCity}</p>
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
      {isLoader && <Loader />}
      {!isLoader && foundCities.length > 0 && (
        <FoundCities
          foundCities={foundCities}
          handlerChoiceCity={handlerChoiceCity}
        />
      )}
    </WrapSearchCity>
  );
};

SearchCity.propTypes = {
  descriptionCity: PropTypes.string.isRequired,
  handlerCloseSearch: PropTypes.func.isRequired,
  handlerChoiceCity: PropTypes.func.isRequired,
};

export default SearchCity;
