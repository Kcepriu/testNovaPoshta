import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchCity from 'components/SearchCity/SearchCity';

import { WrapCity, DescriptionCity, WrapSearchCity } from './City.styled';

const City = ({ city, handlerChoiceCity }) => {
  const [isSearch, setIsSearch] = useState(false);

  const handlerStatusIsSearch = (status = null) => {
    if (status === null) {
      setIsSearch(prev => !prev);
    } else {
      setIsSearch(status);
    }
  };
  const choiceCity = city => {
    setIsSearch(false);
    handlerChoiceCity(city);
  };

  const cityName = city ? city.name : 'Натисніть щоб вибрати місто';
  return (
    <WrapCity>
      <DescriptionCity id="descriptionCity" onClick={handlerStatusIsSearch}>
        <p>{cityName}</p>
      </DescriptionCity>

      {isSearch && (
        <WrapSearchCity id="searchCity">
          <SearchCity
            descriptionCity={cityName}
            handlerCloseSearch={handlerStatusIsSearch}
            handlerChoiceCity={choiceCity}
          />
        </WrapSearchCity>
      )}
    </WrapCity>
  );
};

City.propTypes = {
  city: PropTypes.exact({
    ref: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  handlerChoiceCity: PropTypes.func.isRequired,
};

export default City;
