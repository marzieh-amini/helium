import Tabs from "../../common/tabs/Tabs";
import { useState } from "react";
import _ from "lodash";
import SearchResultAuthors from "./section/SearchResultAuthors";
import SearchResultArticels from "./section/SearchResultArticels";
import SearchResultSubject from "./section/SearchResultSubject";
import { useSelector } from "react-redux";
import {
  selectResultFilter,
  selectStatus,
} from "../../../redux/reducers/searchSlice";
const SearchResult = () => {
  const [tabs, setTabs] = useState([
    { id: "articles", title: "مقالات" },
    { id: "pepoles", title: "افراد" },
    { id: "subjects", title: "موضوعات" },
  ]);
  const result = useSelector(selectResultFilter);
  const status = useSelector(selectStatus);

  return (
    <>
      <Tabs tabs={tabs}>
        <SearchResultArticels articles={result.articles} status={status} />
        <SearchResultAuthors authors={result.authors} status={status} />
        <SearchResultSubject tags={result.tags} status={status} />
      </Tabs>
    </>
  );
};
export default SearchResult;
