import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import edit from "../../../assets/images/edit.png";
import send from "../../../assets/images/Group 48.svg";
import gmail from "../../../assets/images/sms.png";
import whats from "../../../assets/images/whatsapp.png";
import insta from "../../../assets/images/instagram.png";
import { authorSettingLinksSchema } from "../../../helpers/validations/authorValidations";

const LinksAuthor = ({ author, handleSubmitForm }) => {
  const {
    userName,
    email,
    settings: {
      links: { telegram, whatsapp, instagram },
    },
  } = author;
  const [editLinks, setEditeLinks] = useState(false);

  const sendDataForm = (values) => {
    const data = {
      ...author,
      email: values.email,
      settings: {
        ...author.settings,
        links: {
          telegram: "",
          whatsapp: values.whatsapp,
          instagram: values.instagram,
        },
      },
    };
    handleSubmitForm(data);
    setEditeLinks(false);
  };

  return (
    <>
      {!editLinks ? (
        <div className="links-author">
          <div className="links-author_userName">
            <div className="title">
              <h2>نام کاربری و لینک</h2>
            </div>
            <div className="content">
              <p>{userName}@</p>
              <p>http://helium.ir/@{userName}</p>
            </div>
          </div>
          <div className="links-author_social">
            <div className="title">
              <h2>لینک های شما</h2>
            </div>
            <div className="content">
              <p>
                <img src={gmail} alt="email" />
                {email}
              </p>
              <p>
                <img src={whats} alt="whatsapp" />
                {whatsapp.length > 0 ? whatsapp : "whatsapp.com/userName"}
              </p>
              <p>
                <img src={insta} alt="instagram" />
                {instagram.length > 0 ? instagram : "instagram.com/userName"}
              </p>
            </div>
          </div>
          <div className="links-author_btn">
            <button
              className="btn setting-btn"
              onClick={() => {
                setEditeLinks(true);
              }}
            >
              <img src={edit} alt="edit-btn" />
            </button>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            email,
            telegram,
            whatsapp,
            instagram,
          }}
          validationSchema={authorSettingLinksSchema}
          onSubmit={(values) => {
            sendDataForm(values);
          }}
        >
          <Form className="links-author form">
            <div className="links-author_userName">
              <div className="title">
                <h2>نام کاربری و لینک</h2>
              </div>
              <div className="content">
                <p>{userName}@</p>
                <p>http://helium.ir/@{userName}</p>
              </div>
            </div>
            <div className="links-author_social">
              <div className="title">
                <h2>لینک های شما</h2>
              </div>
              <div className="content">
                <p>
                  <img src={gmail} alt="email" />
                  <Field
                    type="text"
                    name="email"
                    placeholder="example@helium.com"
                  />
                  <ErrorMessage
                    name="email"
                    render={(e) => <span className="error-message">{e}</span>}
                  />
                </p>
                <p>
                  <img src={whats} alt="whatsapp" />
                  <Field
                    type="text"
                    name="whatsapp"
                    placeholder="نام کاربری اکانت خود را وارد کنید"
                  />
                  <ErrorMessage
                    name="whatsapp"
                    render={(e) => <span className="error-message">{e}</span>}
                  />
                </p>
                <p>
                  <img src={insta} alt="instagram" />
                  <Field
                    type="text"
                    name="instagram"
                    placeholder="نام کاربری اکانت خود را وارد کنید"
                  />
                  <ErrorMessage
                    name="instagram"
                    render={(e) => <span className="error-message">{e}</span>}
                  />
                </p>
              </div>
            </div>
            <div className="links-author_btn">
              <button className="btn setting-btn" type="submit">
                <img src={send} alt="edit-btn" />
              </button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default LinksAuthor;
