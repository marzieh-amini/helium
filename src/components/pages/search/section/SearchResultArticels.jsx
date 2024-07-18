import PaginatedArticles from "../../../common/PaginatedArticles";
import { NotFoundText, Loading } from "../../../index";
const SearchResultArticles = ({ articles, status }) => {
  return (
    <div className="">
      {status === "pending" ? (
        <Loading />
      ) : articles.length > 0 ? (
        <PaginatedArticles articles={articles} articlesPerPage={4} />
      ) : (
        <NotFoundText text={"مقاله ای با این عنوان یافت نشد !"} />
      )}
    </div>
  );
};
export default SearchResultArticles;
