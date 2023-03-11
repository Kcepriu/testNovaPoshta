import PropTypes from 'prop-types';
import ScheduleWarehouse from 'components/ScheduleWarehouse/ScheduleWarehouse';

const MoreInformationWarehouse = ({ warehouse }) => {
  const {
    SettlementTypeDescription,
    CityDescription,
    Description,
    TotalMaxWeightAllowed,
    ReceivingLimitationsOnDimensions: { Width, Height, Length },
    Schedule,
  } = warehouse;
  return (
    <>
      <h3>
        {SettlementTypeDescription} {CityDescription}
      </h3>
      <h4>{Description}</h4>
      <p>
        <span>Обмеження ваги: </span>
        {TotalMaxWeightAllowed === '0'
          ? 'Без обмежень'
          : TotalMaxWeightAllowed + ' кг.'}
      </p>
      <p>
        Обмеження за габаритами (см): {Width}x{Height}x{Length}
      </p>
      <ScheduleWarehouse schedule={Schedule} />
    </>
  );
};

MoreInformationWarehouse.propTypes = {
  warehouse: PropTypes.shape({
    Description: PropTypes.string.isRequired,
    SettlementTypeDescription: PropTypes.string.isRequired,
    CityDescription: PropTypes.string.isRequired,
    TotalMaxWeightAllowed: PropTypes.string.isRequired,
    ReceivingLimitationsOnDimensions: PropTypes.exact({
      Width: PropTypes.number.isRequired,
      Height: PropTypes.number.isRequired,
      Length: PropTypes.number.isRequired,
    }).isRequired,
    Schedule: PropTypes.object.isRequired,
  }),
};

export default MoreInformationWarehouse;
