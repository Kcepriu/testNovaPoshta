import ItemWarehouses from 'components/ItemWarehouses/ItemWarehouses';
import { List } from './ListWarehouses.styled';

const items = [
  'Відділення 1 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 2 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 3 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 4 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 5 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 6 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 7 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 8 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 9 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
  'Відділення 10 Incididunt culpa sunt nostrud laborum magna aute adipisicing sunt consequat dolore sunt ullamco tempor.',
];

const ListWarehouses = () => {
  return (
    <List>
      {items.map((element, index) => {
        return <ItemWarehouses key={index} description={element} />;
      })}
    </List>
  );
};

export default ListWarehouses;
