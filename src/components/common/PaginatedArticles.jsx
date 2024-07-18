import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ArticlesPreview from "../articlePreview/ArticlesPreview";

function PaginatedArticles({ articlesPerPage, articles }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching articles from another resources.
  // (This could be articles from props; or articles loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + articlesPerPage;
  // console.log(`Loading articles from ${itemOffset} to ${endOffset}`);
  const currentArticles = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / articlesPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * articlesPerPage) % articles.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ArticlesPreview currentArticles={currentArticles} />
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
export default PaginatedArticles;
