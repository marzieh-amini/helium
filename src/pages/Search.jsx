import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import _ from "lodash";
import { SearchResult } from "../components/pages";
import { useGetArticlesQuery, useGetTagsQuery } from "../api/apislice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAuthors } from "../redux/reducers/authorsSlice";
import {
  changedStatus,
  filteredData,
  setData,
} from "../redux/reducers/searchSlice";
const Search = ({ helmet }) => {
  const dispatch = useDispatch();

  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(search);

  //get all data of server
  const { data: articles = [], isSuccess } = useGetArticlesQuery();
  const { data: tags = [], isSuccess: isFinish } = useGetTagsQuery();
  const authors = useSelector(selectAllAuthors);

  useEffect(() => {
    dispatch(changedStatus("pending"));
    if (isSuccess && isFinish) {
      dispatch(setData({ articles, authors, tags }));
      dispatch(filteredData({ searchParams: searchParams.get("filter") }));
    }
  }, [articles, authors, tags]);

  const filterAllTabs = _.debounce((query) => {
    dispatch(filteredData({ searchParams: query }));
  }, 1000);

  const changeQuerySearch = (query) => {
    dispatch(changedStatus("pending"));
    setSearchParams({ filter: query });
    filterAllTabs(query);
  };
  return (
    <>
      {helmet}
      
      <div className="search">
        <div className="search__box-input">
          <span>نتایج برای </span>
          <input
            type="text"
            value={searchParams.get("filter")}
            onChange={(e) => changeQuerySearch(e.target.value)}
          />
        </div>

        <SearchResult />
      </div>
    </>
  );
};
export default Search;
