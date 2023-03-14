import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'react-router-dom';

import { PAGE_FROM_REQUEST } from 'helpers/constants';

const Pagination = ({ totalElement, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPage = Math.ceil(totalElement / PAGE_FROM_REQUEST);

  const handlerChoicePage = ({ selected: page }) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: page + 1 });
  };

  return (
    <>
      {totalPage > 1 && (
        <ReactPaginate
          className="react-paginate"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlerChoicePage}
          forcePage={currentPage - 1}
          pageRangeDisplayed={3}
          pageCount={totalPage}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default Pagination;
