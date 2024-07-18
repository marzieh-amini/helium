import { useSelector } from "react-redux";
import HeaderUser from "./HeaderUser";
import HeaderRegister from "./HeaderRegister";
import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import { selectIsLogin } from "../../../redux/reducers/authUserSlice";
const HeaderAction = ({ hideBtnRegister }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const userIsLogin = useSelector(selectIsLogin);
  const openMenu = () => {
    setActiveMenu(true);
  };
  const closeMenu = () => {
    setActiveMenu(false);
  };

  return (
    <>
      {hideBtnRegister ? null : (
        <>
          <div className="nav__action">
            <HeaderSearch />
            <button onClick={openMenu} className="btn open-menu">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="navbar-toggle-icon"
              >
                <rect stroke="#30bfb7" y="9" width="20" height="2"></rect>
                <rect stroke="#30bfb7" y="3" width="20" height="2"></rect>
                <rect stroke="#30bfb7" y="15" width="20" height="2"></rect>
              </svg>
            </button>
            <div
              className={`nav__action-menu ${
                activeMenu ? "nav__action-menu__show" : ""
              }`}
            >
              <div className="nav__action-menu__content">
                <button onClick={closeMenu} className="btn close-menu">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="close-large"
                  >
                    <line
                      fill="none"
                      stroke="#139eca"
                      x1="1"
                      y1="1"
                      x2="19"
                      y2="19"
                    ></line>
                    <line
                      fill="none"
                      stroke="#139eca"
                      x1="19"
                      y1="1"
                      x2="1"
                      y2="19"
                    ></line>
                  </svg>
                </button>
                {userIsLogin ? (
                  <HeaderUser setActiveMenu={setActiveMenu} />
                ) : (
                  <HeaderRegister />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderAction;
