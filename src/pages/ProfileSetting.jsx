import setting from "../assets/images/candle-2.png";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthor } from "../redux/reducers/authorsSlice";
import { NotFoundText } from "../components";
import _ from "lodash"
import {
  AboutAuthor,
  DescriptionAuthor,
  FollowersAuthor,
  LinksAuthor,
  PersonalAuthor,
} from "../components/pages";
import { useState } from "react";
import PrivateRoute from "../components/private-route/PrivateRoute";
import { selectUser } from "../redux/reducers/authUserSlice";
const ProfileSetting = ({ helmet }) => {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const [remaining, setRemaining] = useState();
  const [classColor, setClassColor] = useState("");
  const checktTextLength = (text, maxChar) => {
    // remaining can't be negative
    text.length < maxChar
      ? setRemaining(maxChar - text.length)
      : setRemaining(0);

    //set class when finish remaining
    maxChar - text.length > maxChar * 0.1
      ? setClassColor("")
      : setClassColor("text-red");
  };
  const handleSubmitForm = async (data) => {
    try {
      //if anything chenging send request to server
      if (!_.isEqual(data, userInfo)) {
        await dispatch(updateAuthor(data)).unwrap();
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {helmet}
      <div className="ProfileSttings">
        {userInfo && userInfo !== "null" && userInfo !== "undefined" ? (
          <div className="ProfileSttings__container">
            <div className="ProfileSttings__container-title">
              <img src={setting} alt="setting" />
              <h1>تنظیمات حساب کاربری</h1>
            </div>
            <section className="ProfileSttings__container-content">
              <AboutAuthor
                classColor={classColor}
                remaining={remaining}
                checktTextLength={checktTextLength}
                author={userInfo}
                handleSubmitForm={handleSubmitForm}
              />
              <DescriptionAuthor
                classColor={classColor}
                remaining={remaining}
                checktTextLength={checktTextLength}
                author={userInfo}
                handleSubmitForm={handleSubmitForm}
              />
              <LinksAuthor author={userInfo} 
                handleSubmitForm={handleSubmitForm} />
              <FollowersAuthor />
              <PersonalAuthor />
            </section>
          </div>
        ) : (
          <NotFoundText text={"کاربری با این مشخصات وجود ندارد."} />
        )}
      </div>
    </>
  );
};

export default PrivateRoute(ProfileSetting);
