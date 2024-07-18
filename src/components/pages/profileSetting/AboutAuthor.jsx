import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import edit from "../../../assets/images/edit.png";
import send from "../../../assets/images/Group 48.svg";
import avatar from "../../../assets/images/avatar.png";
import { authorSettingInfoSchema } from "../../../helpers/validations/authorValidations";
const AboutAuthor = ({
  author,
  remaining,
  checktTextLength,
  classColor,
  handleSubmitForm,
}) => {
  const {
    firstName,
    lastName,
    settings: { desShort, photo },
  } = author;

  const [editInfo, setEditInfo] = useState(false);
  //set maximum for length desShort
  const [maxChar, setMaxChar] = useState(60);

  const sendDataForm = (values) => {
    const data = {
      ...author,
      firstName: values.firstName,
      lastName: values.lastName,
      settings: {
        ...author.settings,
        desShort: values.desShort,
      },
    };
    handleSubmitForm(data);
    setEditInfo(false);
  };

  return (
    <div className="about-author">
      <div className="about-author_title">
        <h2>درباره شما</h2>
      </div>
      {!editInfo ? (
        <div className="about-author_content">
          <div className="about-author_content__info">
            <div className="info-img">
              <img src={photo.length > 0 ? photo : avatar} alt="تصویر کاربر" />
            </div>
            <div className="info-box">
              <span className="label">نام</span>
              <span>{firstName}</span>
            </div>
            <div className="info-box box-lasname">
              <span className="label">نام خانوادگی</span>
              <span>{lastName}</span>
            </div>
            <div className="info-box box-desShort">
              <span className="label">شرح کوتاه</span>
              <span>
                {desShort.length > 0
                  ? desShort
                  : "شرح کوتاهی از خود برای کاربران بنویسید"}
              </span>
            </div>
          </div>
          <div className="about-author_content__btn">
            <button
              className="btn setting-btn"
              onClick={() => {
                setEditInfo(true);
                checktTextLength(desShort, maxChar);
              }}
            >
              <img src={edit} alt="edit-btn" />
            </button>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            firstName,
            lastName,
            desShort,
          }}
          validationSchema={authorSettingInfoSchema}
          onSubmit={(values) => {
            sendDataForm(values);
          }}
        >
          <Form className="about-author_content form">
            <div className="about-author_content__info">
              <div className="info-img">
                <img src={avatar} alt="تصویر کاربر" />
              </div>
              <div className="info-box">
                <label className="label">نام</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="نام خود را به فارسی وارد کنید"
                />
                <ErrorMessage
                  name="firstName"
                  render={(e) => <h3 className="error-message">{e}</h3>}
                />
              </div>
              <div className="info-box">
                <label className="label">نام خانوادگی</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="نام خانوادگی خود را به فارسی وارد کنید"
                />
                <ErrorMessage
                  name="lastName"
                  render={(e) => <h3 className="error-message">{e}</h3>}
                />
              </div>
              <div className="info-box box-desShort">
                <label className="label">
                  شرح کوتاه{" "}
                  <span id="remaining-Char">
                    <span className={classColor}>{remaining}</span> / {maxChar}
                  </span>
                </label>
                <Field
                  type="text"
                  name="desShort"
                  onKeyUp={(e) => checktTextLength(e.target.value, maxChar)}
                  placeholder="شرح کوتاهی از خود بنویسید"
                />
                <ErrorMessage
                  name="desShort"
                  render={(e) => <h3 className="error-message">{e}</h3>}
                />
              </div>
            </div>
            <div className="about-author_content__btn">
              <button className="btn setting-btn" type="submit">
                <img src={send} alt="edit-btn" />
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default AboutAuthor;
