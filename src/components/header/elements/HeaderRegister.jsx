import { Link, useLocation } from "react-router-dom";

function HeaderRegister() {
  const location = useLocation();
  return (
    <div className="nav__signup">
      <Link
        to={`/signIn`}
        state={{ from: `${location.pathname}` }}
        className="btn btn__signup"
      >
        ورود / ثبت نام{" "}
      </Link>
    </div>
  );
}

export default HeaderRegister;
