import PropTypes from 'prop-types';
import { Item } from './ItemFoundCities.styled';

const ItemFoundCities = ({ city, handlerChoiceCity }) => {
  const { ref, name } = city;
  return (
    <>
      <Item key={ref} onClick={() => handlerChoiceCity(city)}>
        {name}
      </Item>
    </>
  );
};

ItemFoundCities.propTypes = {
  city: PropTypes.exact({
    ref: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handlerChoiceCity: PropTypes.func.isRequired,
};
export default ItemFoundCities;
