import { filretAll } from 'helpers/constantText';

import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Label, Select } from './FilterWarehousesSelect.styled';

const FilterWarehousesSelect = ({ filters }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter = searchParams.get('filter') ?? '';

  const handlerChoiceFilter = event => {
    const Ref = event.target.value;

    const newParams = {
      ...Object.fromEntries(searchParams),
      filter: Ref,
    };

    delete newParams.page;

    if (Ref === 'All') {
      delete newParams.filter;
    }
    setSearchParams(newParams);
  };

  return (
    <Label>
      Фільтр по типу відділення:
      <Select
        id="Filter"
        name="Filter"
        defaultValue="All"
        onChange={handlerChoiceFilter}
      >
        <option value="All" selected={activeFilter === ''}>
          {filretAll}
        </option>

        {filters.map(({ Ref, Description }) => {
          return (
            <option key={Ref} value={Ref} selected={activeFilter === Ref}>
              {Description}
            </option>
          );
        })}
      </Select>
    </Label>
  );
};

FilterWarehousesSelect.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      Ref: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FilterWarehousesSelect;
