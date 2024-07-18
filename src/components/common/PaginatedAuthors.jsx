import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Authors from "../authors/Authors";

function PaginatedAuthors({ authorsPerPage, authors }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + authorsPerPage;
  const currentAuthors = authors.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(authors.length / authorsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * authorsPerPage) % authors.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Authors currentAuthors={currentAuthors} />
      <ReactPaginate
        containerClassName="pagination-list"
        activeClassName="active"
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel="قبلی"
        nextLabel="بعدی"
      />
    </>
  );
}
export default PaginatedAuthors;
