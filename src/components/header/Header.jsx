import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderLogo, HeaderAction } from "./elements";
const Header = () => {
  const [hideBtnRegister, setHideBtnRegister] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname === "/signIn" ||
      pathname === "/signUp" ||
      pathname === "/signUp/done"
    ) {
      setHideBtnRegister(true);
    } else {
      setHideBtnRegister(false);
    }
  }, []);

  return (
    <>
      <nav className="nav">
        <HeaderLogo />
        <HeaderAction hideBtnRegister={hideBtnRegister} />
      </nav>
    </>
  );
};

export default Header;
