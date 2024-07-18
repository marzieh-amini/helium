import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import edit from "../../../assets/images/edit.png";
import send from "../../../assets/images/Group 48.svg";
import { authorSettingDesLongSchema } from "../../../helpers/validations/authorValidations";

const DescriptionAuthor = ({
  author,
  remaining,
  checktTextLength,
  classColor,
  handleSubmitForm,
}) => {
  const {
    settings: { desLong },
  } = author;
  const [editDes, setEditeDes] = useState(false);

  //set maximum for length desLong
  const [maxChar, setMaxChar] = useState(160);

  const sendDataForm = ({ desLong }) => {
    const data = {
      ...author,
      settings: {
        ...author.settings,
        desLong,
      },
    };
    handleSubmitForm(data);
    setEditeDes(false);
  };

  return (
    <>
      {!editDes ? (
        <div className="description-author">
          <div className="description-author_content">
            <div className="description-author_content-title">
              <h2>شرح</h2>
              <span>حداکثر ۱۶۰ کارکتر</span>
            </div>
            <div className="description-author_content-des">
              {desLong.length > 0 ? (
                <p>{desLong}</p>
              ) : (
                <p>
                  هر انچه درباره خودتان که علاقه مند هستید با مخاطبان به اشتراک
                  بگذارید را بنویسید
                </p>
              )}
            </div>
          </div>
          <div className="description-author_btn">
            <button
              className="btn setting-btn"
              onClick={() => {
                setEditeDes(true);
                checktTextLength(desLong, maxChar);
              }}
            >
              <img src={edit} alt="edit-btn" />
            </button>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            desLong: desLong,
          }}
          validationSchema={authorSettingDesLongSchema}
          onSubmit={(values) => {
            sendDataForm(values);
          }}
        >
          <Form className="description-author form">
            <div className="description-author_content">
              <div className="description-author_content-title">
                <h2>شرح</h2>
                <span>
                  <span className={classColor}>{remaining}</span> / {maxChar}
                </span>
              </div>
              <div className="description-author_content-des">
                <Field
                  type="text"
                  onKeyUp={(e) => checktTextLength(e.target.value, maxChar)}
                  as="textarea"
                  name="desLong"
                  placeholder="شرح خود را وارد کنید"
                />
                <ErrorMessage
                  name="desLong"
                  render={(e) => <h3 className="error-message">{e}</h3>}
                />
              </div>
            </div>
            <div className="description-author_btn">
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

export default DescriptionAuthor;
