import { NotFoundText, Loading } from "../../../index";

const SearchResultSubject = ({ tags, status }) => {
  return (
    <div className="search__tags">
      {status === "pending" ? (
        <Loading />
      ) : tags.length > 0 ? (
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <h2>{tag.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <NotFoundText text={"موضوع مورد نظر شما یافت نشد !"} />
      )}
    </div>
  );
};
export default SearchResultSubject;
