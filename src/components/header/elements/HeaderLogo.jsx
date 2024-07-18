import { Component } from "react";
import logo from "../../../assets/images/Group 249.png";
import { Link } from "react-router-dom";
class HeaderLogo extends Component {
  render() {
    return (
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    );
  }
}

export default HeaderLogo;
