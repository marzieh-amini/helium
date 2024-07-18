import avatar from "../../../assets/images/avatar.png";
import { useSelector } from "react-redux";
import { selectAuthorById } from "../../../redux/reducers/authorsSlice";
import { Bookmark, Follow } from "../../common";
const ArticlePreviewHeader = ({ authorId, articleId }) => {
  const author = useSelector((state) => selectAuthorById(state, authorId));

  const { firstName, lastName, settings } = author;

  return (
    <div className="article-prev__header">
      <div className="writer">
        <img
          className="writer__img"
          alt={`${firstName} ${lastName}`}
          src={settings.photo.length > 0 ? settings.photo : avatar}
        />
        <h3 className="writer__name">{`${firstName}  ${lastName}`}</h3>
      </div>
      <div className="article-prev__buttons">
        <Follow authorId={authorId} />
        <Bookmark articleId={articleId} />
      </div>
    </div>
  );
};
export default ArticlePreviewHeader;
