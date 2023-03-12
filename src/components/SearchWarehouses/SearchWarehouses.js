import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { Label, Input } from './SearchWarehouses.stylef';

const SearchWarehouses = ({
  searchText,
  handlerChangeText,
  setNameSearchWarehouses,
}) => {
  const debouncedChangeCity = useDebouncedCallback(value => {
    setNameSearchWarehouses(value);
  }, 1000);

  const onChangeText = text => {
    handlerChangeText(text);
    debouncedChangeCity(text);
  };

  return (
    <Label>
      Пошук по назві:
      <Input
        name="nameWarehouses"
        type="text"
        autoComplete="on"
        autoFocus
        // placeholder="Введіть назву відділення"
        value={searchText}
        onChange={e => onChangeText(e.target.value)}
      />
    </Label>
  );
};

SearchWarehouses.propTypes = {
  searchText: PropTypes.string.isRequired,
  handlerChangeText: PropTypes.func.isRequired,
  setNameSearchWarehouses: PropTypes.func.isRequired,
};

export default SearchWarehouses;
