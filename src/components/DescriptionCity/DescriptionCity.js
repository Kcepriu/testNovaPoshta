import PropTypes from 'prop-types';

const DescriptionCity = ({ descriptionCity, showOtherText = true }) => {
  const otherText = descriptionCity
    ? 'Натисніть щоб змінити місто'
    : 'Натисніть щоб вибрати місто';
  return (
    <>
      {descriptionCity && <h3>{descriptionCity}</h3>}
      {showOtherText && <p>{otherText}</p>}
    </>
  );
};

DescriptionCity.propTypes = {
  descriptionCity: PropTypes.string,
  chowOtherText: PropTypes.bool,
};
export default DescriptionCity;
