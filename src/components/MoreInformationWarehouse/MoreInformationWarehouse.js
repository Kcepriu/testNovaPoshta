import PropTypes from 'prop-types';
import ScheduleWarehouse from 'components/ScheduleWarehouse/ScheduleWarehouse';
import { HeaderText, WrapInformation } from './MoreInformationWarehouse.styled';
import * as Texts from 'helpers/constantText';

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
        <HeaderText>{Texts.weightLimit}: </HeaderText>
        {TotalMaxWeightAllowed === '0'
          ? Texts.withoutLimits
          : TotalMaxWeightAllowed + ' ' + Texts.kg}
      </p>
      <p>
        <HeaderText>{Texts.sizeRestrictions} </HeaderText>
        {Width}x{Height}x{Length}
      </p>

      <ScheduleWarehouse schedule={Schedule}>
        <HeaderText>{Texts.workSchedule}</HeaderText>{' '}
      </ScheduleWarehouse>

      <ScheduleWarehouse schedule={Reception}>
        <HeaderText>{Texts.receptionSchedule}</HeaderText>{' '}
      </ScheduleWarehouse>

      <ScheduleWarehouse schedule={Delivery}>
        <HeaderText>{Texts.shippingSchedule}</HeaderText>{' '}
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
