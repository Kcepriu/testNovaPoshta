import City from 'components/City/City';
import FilterWarehouses from 'components/FilterWarehouses/FilterWarehouses';
import ListWarehouses from 'components/ListWarehouses/ListWarehouses';
import Pagination from 'components/Pagination/Paginnation';

import Spinner from 'components/Spinner/Spinner';
import useFilter from 'hooks/useFilter';
import useWarehouses from 'hooks/useWarehouses';

const Warehouses = () => {
  const [filters, activeFilter, isLoaderFilter, setActiveFilter] = useFilter();
  const [
    selectedCity,
    foundWarehouses,
    isLoaderWarehouses,
    totalWarehouses,
    curentPage,
    setCurentPage,
    setSelectedCity,
    setFilter,
  ] = useWarehouses();

  //* Handlers

  const handlerChoiceCity = city => {
    setSelectedCity(city);
  };

  const handlerChoiceFilter = ref => {
    setActiveFilter(ref);
    setFilter(ref);
  };

  const handlerPagination = page => {
    setCurentPage(page);
  };

  return (
    <>
      <h2>Список відділень міста:</h2>
      <City city={selectedCity} handlerChoiceCity={handlerChoiceCity} />
      {filters.length > 0 && (
        <FilterWarehouses
          filters={filters}
          activeFilter={activeFilter}
          handlerChoiceFilter={handlerChoiceFilter}
        />
      )}

      {foundWarehouses.length > 0 && (
        <ListWarehouses foundWarehouses={foundWarehouses} />
      )}

      <Pagination
        totalElement={totalWarehouses}
        currentPage={curentPage}
        handlerChoicePage={handlerPagination}
      />

      {isLoaderWarehouses || isLoaderFilter ? <Spinner /> : ''}
    </>
  );
};

export default Warehouses;
