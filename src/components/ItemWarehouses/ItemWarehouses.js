import PropTypes from 'prop-types';

import { useState } from 'react';
import { Item } from './ItemWarehouses.styled';
import MoreInformationWarehouse from 'components/MoreInformationWarehouse/MoreInformationWarehouse';

const ItemWarehouses = ({ warehouse }) => {
  const [isMoreInformation, setIsMoreInformation] = useState(false);

  const toogleMoreInformation = () => {
    setIsMoreInformation(prev => !prev);
  };

  return (
    <>
      <Item onClick={toogleMoreInformation}>
        {!isMoreInformation && <p>{warehouse.Description}</p>}
        {isMoreInformation && (
          <MoreInformationWarehouse warehouse={warehouse} />
        )}
      </Item>
    </>
  );
};

ItemWarehouses.propTypes = {
  warehouse: PropTypes.shape({
    Description: PropTypes.string.isRequired,
  }),
};

export default ItemWarehouses;
