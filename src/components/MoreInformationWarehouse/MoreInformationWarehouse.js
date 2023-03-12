import PropTypes from 'prop-types';
import ScheduleWarehouse from 'components/ScheduleWarehouse/ScheduleWarehouse';
import { HeaderText, WrapInformation } from './MoreInformationWarehouse.styled';

const MoreInformationWarehouse = ({ warehouse }) => {
  const {
    SettlementTypeDescription,
    CityDescription,
    Description,
    TotalMaxWeightAllowed,
    ReceivingLimitationsOnDimensions: { Width, Height, Length },
    Schedule,
    Reception,
    Delivery,
  } = warehouse;
  return (
    <WrapInformation>
      <h3>
        {SettlementTypeDescription} {CityDescription}
      </h3>
      <h4>{Description}</h4>
      <p>
        <HeaderText>Обмеження ваги: </HeaderText>
        {TotalMaxWeightAllowed === '0'
          ? 'Без обмежень'
          : TotalMaxWeightAllowed + ' кг.'}
      </p>
      <p>
        <HeaderText>Обмеження за габаритами (см): </HeaderText>
        {Width}x{Height}x{Length}
      </p>

      <ScheduleWarehouse schedule={Schedule}>
        <HeaderText>Графік роботи:</HeaderText>{' '}
      </ScheduleWarehouse>

      <ScheduleWarehouse schedule={Reception}>
        <HeaderText>Графік приймання відправлень</HeaderText>{' '}
      </ScheduleWarehouse>

      <ScheduleWarehouse schedule={Delivery}>
        <HeaderText>Графік відправки день в день</HeaderText>{' '}
      </ScheduleWarehouse>
    </WrapInformation>
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
    Delivery: PropTypes.object.isRequired,
    Reception: PropTypes.object.isRequired,
  }),
};

export default MoreInformationWarehouse;
