import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchCity from 'components/SearchCity/SearchCity';
import DescriptionCity from 'components/DescriptionCity/DescriptionCity';
import { WrapCity, WrapSearchCity, WrapDescriptionCity } from './City.styled';

const City = ({ city }) => {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState();

  useEffect(() => {
    if (!city) setIsSearch(true);
  }, [city]);

  const handlerStatusIsSearch = (status = null) => {
    if (status === null) {
      setIsSearch(prev => !prev);
    } else if (!status && !city) {
      setIsSearch(true);
    } else {
      setIsSearch(status);
    }
  };

  const choiceCity = city => {
    setIsSearch(false);
    navigate(`/warehouses/${city.ref}`, { replace: true });
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
};

export default City;
