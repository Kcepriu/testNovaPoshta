import PropTypes from 'prop-types';

import { WrapStatusDocument, BoldText } from './StatusDocument.styled';
import * as Texts from 'helpers/constantText';

const StatusDocument = ({ informationTTN }) => {
  const { Number, Status, WarehouseSender, WarehouseRecipient } =
    informationTTN;

  return (
    <WrapStatusDocument>
      {informationTTN && (
        <>
          <h3>№ {Number}</h3>
          <p>
            <BoldText>{Texts.statusDelivery}</BoldText> {Status}
          </p>
          <p>
            <BoldText>{Texts.sent}</BoldText> {WarehouseSender}
          </p>
          <p>
            <BoldText>{Texts.received}</BoldText> {WarehouseRecipient}
          </p>
        </>
      )}
    </WrapStatusDocument>
  );
};

StatusDocument.propTypes = {
  informationTTN: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      Number: PropTypes.string,
      Status: PropTypes.string,
      WarehouseSender: PropTypes.string,
      WarehouseRecipient: PropTypes.string,
    }),
  ]),
};

export default StatusDocument;
