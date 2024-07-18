import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authorSignUpSchema } from "../../helpers/validations/authorValidations";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  selectAllAuthors,
} from "../../redux/reducers/authorsSlice";
import Modal from "../../components/common/Modal";
import { Loading } from "../../components";
import { registerUser,selectAuthStatus } from "../../redux/reducers/authUserSlice";
import bcrypt from 'bcryptjs';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);
  const [titleError, setTitleError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const authors = useSelector(selectAllAuthors);

  const createAuthor = async (values) => {
    const findAuthor = authors.find(
      (author) => author.mobile === values.mobile
    );
    if (findAuthor) {
      setTitleError("کاربری با این شماره همراه وجود دارد");
      setModalOpen(true);
    } else {
      try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPasword = bcrypt.hashSync(values.password, salt);
        const userData = {
            id: nanoid(),
            ...values,
            password: hashedPasword,
            settings: {
              job: "",
              photo: "",
              desShort: "",
              desLong: "",
              links: {
                telegram: "",
                whatsapp: "",
                instagram: "",
              },
            },
          }
        const user = await dispatch(registerUser(userData)).unwrap();
        if(user) navigate("/signUp/done");
      } catch (err) {
        console.error(err);
        setTitleError("مشکلی رخ داده است لطفا مجددا تلاش کنید.");
        setModalOpen(true);
      }
    }
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          title={titleError}
          description=""
        />
      )}
      <div className="signup">
        {status === "loading" ? (
          <Loading />
        ) : (
          <>
            <div className="title">
              <h1> شما هنوز در هلیوم ثبت نام نکرده اید. </h1>
              <h3> لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</h3>
            </div>
            <Formik
              initialValues={{
                mobile: "",
                firstName: "",
                lastName: "",
                email: "",
                userName: "",
                password: "",
              }}
              validationSchema={authorSignUpSchema}
              onSubmit={(values) => {
                createAuthor(values);
              }}
            >
              <Form className="form">
                <div className="form__box">
                  <label>لطفا شماره تلفن همراه خود را وارد کنید</label>
                  <Field
                    type="text"
                    name="mobile"
                    placeholder="مثال : ۰۹۱۵۸۲۷۶۳۱۳"
                  />
                  <ErrorMessage
                    name="mobile"
                    render={(e) => <h3 className="error-message">{e}</h3>}
                  />
                </div>
                <div className="form__box">
                  <label>لطفا نام خود را وارد کنید</label>
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
                <div className="form__box">
                  <label>لطفا نام خانوادگی خود را وارد کنید</label>
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
                <div className="form__box">
                  <label>لطفا ایمیل خود را وارد کنید</label>
                  <Field
                    type="emain"
                    name="email"
                    placeholder="example@helium.com"
                  />
                  <ErrorMessage
                    name="email"
                    render={(e) => <h3 className="error-message">{e}</h3>}
                  />
                </div>
                <div className="form__box">
                  <label>لطفا نام کاربری دلخواه خود را وارد کنید</label>
                  <Field
                    type="text"
                    name="userName"
                    placeholder="نام کاربری را به انگلیسی وارد کنید"
                  />
                  <ErrorMessage
                    name="userName"
                    render={(e) => <h3 className="error-message">{e}</h3>}
                  />
                </div>

                <div className="form__box">
                  <label>لطفا رمز عبور دلخواه خود را وارد کنید</label>
                  <Field
                    type="text"
                    name="password"
                    placeholder=" رمز عبور باید بیشتر از ۵ کاراکتر باشد "
                  />
                  <ErrorMessage
                    name="password"
                    render={(e) => <h3 className="error-message">{e}</h3>}
                  />
                </div>
                <button className="btn btn__submit" type="submit">
                  تایید
                </button>
              </Form>
            </Formik>
          </>
        )}
      </div>
    </>
  );
};
export default SignUp;
