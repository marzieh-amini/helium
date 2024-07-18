import avatar from "../../assets/images/avatar.png";
import { Follow } from "../common";

const Author = ({ author }) => {
  const { firstName, lastName, settings, id } = author;
  return (
    <div className="section__writer">
      <div className="section__writer__img">
        <img
          className="writer__img"
          alt={`${firstName} ${lastName}`}
          src={settings.photo.length > 0 ? settings.photo : avatar}
        />
      </div>
      <div className="section__writer__info">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{settings.desLong}</p>
      </div>
      <div className="section__writer__btn">
        <Follow authorId={id} />
      </div>
    </div>
  );
};
export default Author;
