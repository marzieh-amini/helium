import { Component } from "react";
import footerLogo from "../../assets/images/Group 260.svg";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer__content">
          <div className="footer__logo">
            <img src={footerLogo} />
          </div>
          <div className="footer__description">
            <p>
              هليوم بستري براي اشتراک گذاري ايده هاو فکر افراد پيشرو در زمينه
              علم و دانش است. در هليوم ميتوانيد به جديدترين مقالات علمي کشور
              دسترسي داشته باشيدو خود نيز در ترويج علم و دانش نقشي داشته باشيد.
            </p>
          </div>
        </div>
        <div className="footer__links">
          <ul>
            <li>بنویسید</li>
            <li>راهنما</li>
            <li>معرفی</li>
            <li>قانون</li>
          </ul>
        </div>
      </>
    );
  }
}
export default Footer;
