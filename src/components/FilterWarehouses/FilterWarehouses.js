import PropTypes from 'prop-types';

import { Filter, ItemFilter } from './FilterWarehouses.styled';

const FilterWarehouses = ({ filters, activeFilter, handlerChoiceFilter }) => {
  return (
    <Filter>
      <ItemFilter
        className={activeFilter === '' ? 'Active' : ''}
        onClick={() => handlerChoiceFilter('')}
      >
        Всі
      </ItemFilter>

      {filters.map(({ Ref, Description }) => {
        return (
          <ItemFilter
            key={Ref}
            className={activeFilter === Ref ? 'Active' : ''}
            onClick={() => handlerChoiceFilter(Ref)}
          >
            {Description}
          </ItemFilter>
        );
      })}
    </Filter>
  );
};

FilterWarehouses.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      Ref: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  activeFilter: PropTypes.string.isRequired,
  handlerChoiceFilter: PropTypes.func.isRequired,
};

export default FilterWarehouses;
