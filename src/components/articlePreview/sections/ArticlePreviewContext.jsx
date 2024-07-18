import { Link } from "react-router-dom";

const ArticlePreviewContex = ({ id, title, description }) => {
  return (
    <div className="article-prev__context">
      <Link to={`/article/${id}`}>
        <h1 className="title">{title}</h1>
      </Link>
      <p className="description">{description.substring(0, 300)}{"  ..."}</p>
    </div>
  );
};
export default ArticlePreviewContex;
