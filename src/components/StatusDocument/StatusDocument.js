import PropTypes from 'prop-types';

import { WrapStatusDocument, BoldText } from './StatusDocument.styled';

const StatusDocument = ({ informationTTN }) => {
  const { Number, Status, WarehouseSender, WarehouseRecipient } =
    informationTTN;

  return (
    <WrapStatusDocument>
      {informationTTN && (
        <>
          <h3>№ {Number}</h3>
          <p>
            <BoldText>Статус доставки:</BoldText> {Status}
          </p>
          <p>
            <BoldText>Відправлено:</BoldText> {WarehouseSender}
          </p>
          <p>
            <BoldText>Отримано:</BoldText> {WarehouseRecipient}
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
