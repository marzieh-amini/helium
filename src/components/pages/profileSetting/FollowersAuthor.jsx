import checkbox from "../../../assets/images/checkbox.svg";
import list from "../../../assets/images/list.svg";
const FollowersAuthor = () => {
  return (
    <div className="followers-author">
      <div className="followers-author_title">
        <h2>دنبال کنندگان</h2>
      </div>

      <div className="followers-author_content">
        <div className="form">
          <h3>حریم شخصی</h3>
          <p>
            افراد برای دنبال کردن شما نیاز به تایید شما را دارند.{" "}
            <img src={checkbox} alt="checkbox" />
          </p>
        </div>
        <div>
          <h3>استخراج دنبال کنندگان</h3>
          <p>
            از افراد دنبال کننده خود یک لیست تهیه کنید.
            <img src={list} alt="list" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FollowersAuthor;
