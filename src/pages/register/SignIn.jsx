import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllAuthors,
} from "../../redux/reducers/authorsSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { authorSignInSchema } from "../../helpers/validations/authorValidations";
import Modal from "../../components/common/Modal";
import bcrypt from "bcryptjs"
import { loginUser } from "../../redux/reducers/authUserSlice";
const SignIn = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const authors = useSelector(selectAllAuthors);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const checkUserExists = async (values) => {
    //find user
    const findAuthor = authors.find( (author) => author.mobile === values.mobile );
    if (findAuthor) {
      //check password
      if (bcrypt.compareSync(values.password, findAuthor.password)) { 
        //true pass =>login and redirect user to last page       
         
         const user = await dispatch(loginUser(findAuthor)).unwrap();
         if(user){
          if(location.state?.from.length > 0){
            navigate(`${location.state.from}`)
          }else{
            navigate("/");
          }
         }
       
      } else {
        setModalOpen(true);
      }
    } else {
      setModalOpen(true);
    }
  };
  const gotoSignUp = () => {
    navigate("/signUp");
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          title="موبایل یا رمز عبور وارد شده معتبر نمی باشد "
          description=""
        />
      )}
      <div className="signin">
        <div className="title">
          <h1>ورود / ثبت نام</h1>
        </div>
        <Formik
          initialValues={{
            mobile: "",
            password: "",
          }}
          validationSchema={authorSignInSchema}
          onSubmit={(values) => {
            checkUserExists(values);
          }}
        >
          <Form className="form">
            <div className="form__box">
              <label>لطفا شماره تلفن همراه خود را وارد کنید</label>
              <Field
                type="text"
                id="mobile"
                name="mobile"
                placeholder="مثال : ۰۹۱۵۸۲۷۶۳۱۳"
              />
              <ErrorMessage
                name="mobile"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
            </div>

            <div className="form__box">
              <label>لطفا رمز عبور خود را وارد کنید</label>
              <Field type="text" id="password" name="password" />
              <ErrorMessage
                name="password"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
            </div>
            <button className="btn btn__submit" type="submit">
              ادامه
            </button>
            <span className="login">
              کاربر عزیز اگر ثبت نام نکرده اید لطفا وارد
              <span onClick={gotoSignUp}> صفحه ثبت نام </span>
              شوید
            </span>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default SignIn;
