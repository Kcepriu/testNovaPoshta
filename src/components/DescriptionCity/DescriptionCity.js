import PropTypes from 'prop-types';
import { clickChangeCity, clickSelectCity } from 'helpers/constantText';
import { OtherText } from './DescriptionCity.styled';

const DescriptionCity = ({ descriptionCity, showOtherText = true }) => {
  const otherText = descriptionCity ? clickChangeCity : clickSelectCity;
  return (
    <>
      {descriptionCity && <h3>{descriptionCity}</h3>}
      {showOtherText && <OtherText>{otherText}</OtherText>}
    </>
  );
};

DescriptionCity.propTypes = {
  descriptionCity: PropTypes.string,
  chowOtherText: PropTypes.bool,
};
export default DescriptionCity;
