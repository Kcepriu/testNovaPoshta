import { useSearchParams } from 'react-router-dom';

import { PAGE_FROM_REQUEST } from 'helpers/constants';
import { MainPagination } from './Pagination.styled';

const Pagination = ({ totalElement, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPage = Math.ceil(totalElement / PAGE_FROM_REQUEST);

  const handlerChoicePage = ({ selected: page }) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: page + 1 });
  };

  return (
    <>
      {totalPage > 1 && (
        <MainPagination
          className="react-paginate"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlerChoicePage}
          forcePage={currentPage - 1}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={totalPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default Pagination;
