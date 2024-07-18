import { useSelector } from "react-redux";
import { selectAuthorById } from "../../../../redux/reducers/authorsSlice";
import avatar from "../../../../assets/images/avatar.png";
import { Bookmark, Follow } from "../../../common";
import { useParams } from "react-router-dom";

const HeaderAuthor = ({ authorId }) => {
  const { articleId } = useParams();
  const author = useSelector((state) => selectAuthorById(state, authorId));

  const { firstName, lastName, settings } = author;
  return (
    <>
      <div className="article-view__header">
        <div className="writer">
          {" "}
          <img
            className="writer__img"
            alt={`${firstName} ${lastName}`}
            src={settings.photo.length > 0 ? settings.photo : avatar}
          />
          <h3 className="writer__name">{`
        ${firstName} ${lastName}`}</h3>
        </div>
        <div className="article-view__buttons">
          <Follow authorId={authorId} />
          <Bookmark articleId={articleId} />
        </div>
      </div>
    </>
  );
};

export default HeaderAuthor;
