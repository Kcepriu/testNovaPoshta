import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import FoundCities from 'components/FoundCities/FoundCities';
import Loader from 'components/Loader/Loader';
import DescriptionCity from 'components/DescriptionCity/DescriptionCity';
import { WrapSearchCity, Label, Input } from './SearchCity.styled';
import useSearchCity from 'hooks/useSearchCity';
import useCloseSearchCityElement from 'hooks/useCloseSearchCityElement';

const SearchCity = ({
  descriptionCity,
  handlerCloseSearch,
  handlerChoiceCity,
}) => {
  const [foundCities, isLoader, setNameCity] = useSearchCity();
  const [isCloseSearch] = useCloseSearchCityElement();

  useEffect(() => {
    if (isCloseSearch) handlerCloseSearch(false);
  }, [isCloseSearch, handlerCloseSearch]);

  // * Handlers

  const debouncedChangeCity = useDebouncedCallback(value => {
    setNameCity(value);
  }, 1000);

  return (
    <WrapSearchCity>
      <DescriptionCity
        descriptionCity={descriptionCity}
        showOtherText={false}
      />
      <Label>
        Введіть місто:
        <Input
          name="nameCity"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Назва міста"
          onChange={e => debouncedChangeCity(e.target.value)}
        />
      </Label>
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
