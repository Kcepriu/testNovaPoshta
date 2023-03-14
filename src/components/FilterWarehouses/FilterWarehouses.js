import { filretAll } from 'helpers/constantText';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import { Filter, ItemFilter } from './FilterWarehouses.styled';

const FilterWarehouses = ({ filters }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter = searchParams.get('filter') ?? '';

  const handlerChoiceFilter = Ref => {
    const newParams = {
      ...Object.fromEntries(searchParams),
      filter: Ref,
    };

    delete newParams.page;

    if (Ref === '') {
      delete newParams.filter;
    }
    setSearchParams(newParams);
  };
  return (
    <Filter>
      <ItemFilter
        className={activeFilter === '' ? 'Active' : ''}
        onClick={() => handlerChoiceFilter('')}
      >
        {filretAll}
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
};

export default FilterWarehouses;
