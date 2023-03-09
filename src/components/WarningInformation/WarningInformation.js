import PropTypes from 'prop-types';
import { Warning } from './WarningInformation.styled';

const WarningInformation = ({ information }) => {
  return <Warning>{information}</Warning>;
};

WarningInformation.propTypes = {
  information: PropTypes.string,
};

export default WarningInformation;
