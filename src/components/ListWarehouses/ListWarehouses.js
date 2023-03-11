import ItemWarehouses from 'components/ItemWarehouses/ItemWarehouses';
import { List } from './ListWarehouses.styled';

const ListWarehouses = ({ foundWarehouses }) => {
  return (
    <List>
      {foundWarehouses.map((element, index) => {
        return <ItemWarehouses key={index} description={element.Description} />;
      })}
    </List>
  );
};

export default ListWarehouses;
