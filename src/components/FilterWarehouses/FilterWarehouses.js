import { Filter, ItemFilter } from './FilterWarehouses.styled';

const FilterWarehouses = () => {
  return (
    <Filter>
      <ItemFilter>Поштове відділення</ItemFilter>
      <ItemFilter>Поштомат ПриватБанку</ItemFilter>
      <ItemFilter>Вантажне відділення</ItemFilter>
      <ItemFilter>Поштомат</ItemFilter>
      <ItemFilter>Parcel Shop</ItemFilter>
    </Filter>
  );
};

export default FilterWarehouses;
