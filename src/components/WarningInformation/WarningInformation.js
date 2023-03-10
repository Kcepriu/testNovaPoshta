import PropTypes from 'prop-types';
import { Warning, WrapWarning } from './WarningInformation.styled';

const WarningInformation = ({ information }) => {
  return (
    <WrapWarning>
      <Warning>{information}</Warning>
    </WrapWarning>
  );
};

WarningInformation.propTypes = {
  information: PropTypes.string,
};

export default WarningInformation;
