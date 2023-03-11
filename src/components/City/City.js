import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchCity from 'components/SearchCity/SearchCity';
import DescriptionCity from 'components/DescriptionCity/DescriptionCity';
import { WrapCity, WrapSearchCity, WrapDescriptionCity } from './City.styled';

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

  return (
    <WrapCity>
      <WrapDescriptionCity id="descriptionCity" onClick={handlerStatusIsSearch}>
        <DescriptionCity descriptionCity={city ? city.name : ''} />
      </WrapDescriptionCity>

      {isSearch && (
        <WrapSearchCity id="searchCity">
          <SearchCity
            descriptionCity={city ? city.name : ''}
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
