import PropTypes from 'prop-types';
import ItemFoundCities from 'components/ItemFoundCities/ItemFoundCities';
import { List } from './FoundCities.styled';

const FoundCities = ({ foundCities, handlerChoiceCity }) => {
  return (
    <List>
      {foundCities.map(({ Ref, DeliveryCity, Present }) => {
        const city = {
          ref: DeliveryCity,
          name: Present,
        };

        return (
          <ItemFoundCities
            key={Ref}
            city={city}
            handlerChoiceCity={handlerChoiceCity}
          />
        );
      })}
    </List>
  );
};

FoundCities.propTypes = {
  foundCities: PropTypes.arrayOf(
    PropTypes.shape({
      Ref: PropTypes.string.isRequired,
      DeliveryCity: PropTypes.string.isRequired,
      Present: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handlerChoiceCity: PropTypes.func.isRequired,
};

export default FoundCities;
