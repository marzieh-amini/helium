import PaginatedArticles from "../../common/PaginatedArticles";

const PublicHomePage = ({ articles }) => {
  return (
    <div className="home__public">
      <PaginatedArticles articles={articles} articlesPerPage={4} />
    </div>
  );
};

export default PublicHomePage;
