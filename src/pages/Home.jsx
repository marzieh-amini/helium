import { useMemo } from "react";
import { PublicHomePage, UserHomePage } from "../components/pages";
import { useSelector } from "react-redux";
import { Loading } from "../components";
import { useGetArticlesQuery } from "../api/apislice";
import {
  selectIsLogin,
} from "../redux/reducers/authUserSlice";

const Home = ({ helmet }) => {
  const userIsLogin = useSelector(selectIsLogin);
  const {
    data: articles = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticlesQuery();
  const sortedArticles = useMemo(() => {
    const articleSlice = articles.slice();
    articleSlice.sort((a, b) => b.createDate.localeCompare(a.createDate));
    return articleSlice;
  }, [articles]);
  return (
    <>
      {helmet}
      <div className="home">
        <div className="home__container">
          {isLoading ? (
            <Loading />
          ) : userIsLogin ? (
            <UserHomePage articles={sortedArticles} />
          ) : (
            <PublicHomePage articles={sortedArticles} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
