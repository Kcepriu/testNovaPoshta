import ItemWarehouses from 'components/ItemWarehouses/ItemWarehouses';
import { List } from './ListWarehouses.styled';

const ListWarehouses = ({ foundWarehouses }) => {
  return (
    <List>
      {foundWarehouses.map((warehouse, index) => {
        return <ItemWarehouses key={warehouse.Ref} warehouse={warehouse} />;
      })}
    </List>
  );
};

export default ListWarehouses;
