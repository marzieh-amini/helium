import PaginatedArticles from "../../common/PaginatedArticles";

const UserHomePage = ({ articles }) => {
  return (
    <>
      <PaginatedArticles articles={articles} articlesPerPage={4} />
    </>
  );
};

export default UserHomePage;
