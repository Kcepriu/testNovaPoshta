import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import City from 'components/City/City';
import FilterWarehouses from 'components/FilterWarehouses/FilterWarehouses';
import ListWarehouses from 'components/ListWarehouses/ListWarehouses';
import Pagination from 'components/Pagination/Paginnation';

import Spinner from 'components/Spinner/Spinner';
import useFilter from 'hooks/useFilter';
import useWarehouses from 'hooks/useWarehouses';
import SearchWarehouses from 'components/SearchWarehouses/SearchWarehouses';
import * as Texts from 'helpers/constantText';
import FilterWarehousesSelect from 'components/FilterWarehousesSelect/FilterWarehousesSelect';

const Warehouses = () => {
  const [filters, isLoaderFilter] = useFilter();

  const [
    selectedCity,
    foundWarehouses,
    isLoaderWarehouses,
    totalWarehouses,
    curentPage,
  ] = useWarehouses();

  const [searchText, setSearchText] = useState('');
  const [searchParams] = useSearchParams();
  const searchTextFromParams = searchParams.get('search') ?? '';

  useEffect(() => {
    setSearchText(searchTextFromParams);
  }, [searchTextFromParams]);

  //* Handlers

  return (
    <>
      <h2>{Texts.listDepartments}</h2>

      <City city={selectedCity} />

      {selectedCity && filters.length > 0 && (
        <FilterWarehouses filters={filters} />
      )}

      <FilterWarehousesSelect filters={filters} />

      {selectedCity && (
        <SearchWarehouses
          searchText={searchText}
          handlerChangeText={setSearchText}
        />
      )}

      {foundWarehouses.length > 0 && (
        <ListWarehouses foundWarehouses={foundWarehouses} />
      )}

      <Pagination totalElement={totalWarehouses} currentPage={curentPage} />

      {isLoaderWarehouses || isLoaderFilter ? <Spinner /> : ''}
    </>
  );
};

export default Warehouses;
