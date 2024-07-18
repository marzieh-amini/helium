import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import avatar from "../../../assets/images/avatar.png";
import create_article from "../../../assets/images/document-download.png";
import setting from "../../../assets/images/candle-2.png";
import logout from "../../../assets/images/logout.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser, selectUser } from "../../../redux/reducers/authUserSlice";
const HeaderUser = ({ setActiveMenu }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [showProfileNav, setShowProfileNav] = useState(false);

  const showInfoUser = () => {
    setShowProfileNav((prev) => !prev);
  };

  const closeMenu = () => {
    setActiveMenu(false);
  };
  return (
    <div className="header_user">
      <div className="img-area" onClick={showInfoUser}>
        {user.settings.photo.length > 0 ? (
          <img src={user.settings.photo} alt={user.firstName} />
        ) : (
          <img src={avatar} alt="user-img" />
        )}
      </div>

      <div
        className={`header_user-profile-nav ${
          showProfileNav ? "active" : null
        }`}
      >
        <div className="nav-container">
          <ul onClick={showInfoUser}>
            <li className="info-user">
              <p>
                {user.firstName} {user.lastName}
              </p>
              <span>{user.email}</span>
            </li>
            <li onClick={closeMenu}>
              <Link to={`/article/createArticle`}>
                {" "}
                <img src={create_article} alt={"create_article"} />{" "}
                <span>ایجاد مقاله </span>
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link to={`/profile-setting`}>
                <img src={setting} alt={"setting"} />{" "}
                <span> تنظیمات حساب کاربری </span>
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  dispatch(logoutUser());
                  closeMenu();
                  navigate(`${location.pathname}`);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={logout} alt={"logout"} />{" "}
                <span> خروج از حساب کاربری </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
