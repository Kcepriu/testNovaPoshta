import ReactPaginate from 'react-paginate';
import { PAGE_FROM_REQUEST } from 'helpers/constants';

const Pagination = ({ totalElement, currentPage, handlerChoicePage }) => {
  const totalPage = Math.ceil(totalElement / PAGE_FROM_REQUEST);

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
