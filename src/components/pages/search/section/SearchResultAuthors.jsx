import { PaginatedAuthors } from "../../../common";
import { NotFoundText, Loading } from "../../../index";

const SearchResultAuthors = ({ authors, status }) => {
  return (
    <div className="">
      {status === "pending" ? (
        <Loading />
      ) : authors.length > 0 ? (
        <PaginatedAuthors authorsPerPage={8} authors={authors} />
      ) : (
        <NotFoundText text={"فردی با این نام یافت نشد !"} />
      )}
    </div>
  );
};
export default SearchResultAuthors;
