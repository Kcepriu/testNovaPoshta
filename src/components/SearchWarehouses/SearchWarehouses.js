import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import { useDebouncedCallback } from 'use-debounce';
import { Label, Input } from './SearchWarehouses.stylef';

const SearchWarehouses = ({ searchText, handlerChangeText }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedChangeCity = useDebouncedCallback(search => {
    const newParams = { ...Object.fromEntries(searchParams), search };

    delete newParams.page;

    if (search === '') {
      delete newParams.search;
    }
    setSearchParams(newParams);
  }, 1000);

  const onChangeText = text => {
    handlerChangeText(text);
    debouncedChangeCity(text);
  };

  return (
    <Label>
      Пошук відділення по назві:
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
};

export default SearchWarehouses;
