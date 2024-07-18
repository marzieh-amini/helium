import search from "../../../assets/images/search.png";
import arrow_right from "../../../assets/images/arrow-right.png";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
const HeaderSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams("filter");
  const [articleQuery, setArticleQuery] = useState({ text: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const setQuerySearchInput = (query) => {
    if (query) {
      setArticleQuery({
        ...articleQuery,
        text: query,
      });
      setSearchParams({ filter: query });
    } else {
      setSearchParams({});
      setArticleQuery({
        text: "",
      });
    }
  };
  const searchButton = () => {
    if (articleQuery.text.length > 0) {
      navigate(`/search/${location.search}`);
      setShowSearchInput(false);
    } else {
      console.log("emity");
    }
  };
  return (
    <>
      {!location.pathname.startsWith("/search") && (
        <div className="nav__action-search ">
          <img
            onClick={() => {
              setShowSearchInput((prev) => !prev);
            }}
            src={search}
            alt="search"
          />
          {showSearchInput && (
            <div className="search-input">
              <input
                autoFocus
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    searchButton();
                  }
                }}
                onChange={(e) => setQuerySearchInput(e.target.value)}
                placeholder="عبارت مورد نظر را وارد کنید"
              />
              <button onClick={searchButton}>
                <img src={arrow_right} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default HeaderSearch;
