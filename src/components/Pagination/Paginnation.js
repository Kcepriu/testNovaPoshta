import { PAGE_FROM_REQUEST } from 'helpers/constants';

const Pagination = ({ totalElement, currentPage, handlerChoicePage }) => {
  const totalPage = Math.ceil(totalElement / PAGE_FROM_REQUEST);

  return (
    <>
      {totalPage > 1 && (
        <p>
          current page: {currentPage} total pages: {totalPage}
        </p>
      )}
    </>
  );
};

export default Pagination;
