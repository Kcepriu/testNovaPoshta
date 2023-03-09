const StatusDocument = ({ informationTTN }) => {
  const { Number, Status, WarehouseSender, WarehouseRecipient } =
    informationTTN;

  return (
    <>
      StatusDocument
      <p>{Number}</p>
      <p>{Status}</p>
      <p>{WarehouseSender}</p>
      <p>{WarehouseRecipient}</p>
    </>
  );
};

export default StatusDocument;
