import * as Yup from "yup";

export const authorSchema = Yup.object().shape({
  firstName: Yup.string().required("نام الزامی می باشد "),
  lastName: Yup.string().required("نام خانوادگی الزامی می باشد"),
  mobile: Yup.number()
    .typeError("فرمت شماره موبایل اشتباه است")
    .min(11)
    .required("شماره همراه الزامی می باشد "),
  photo: Yup.string()
    .url("ادرس تصویر صحیح نیست")
    .required("ادرس تصویر الزامی می باشد "),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد "),
  job: Yup.string().required("شغل الزامی می باشد "),
  password: Yup.string().required("رمز عبور الزامی می باشد "),
  userName: Yup.string().required("نام کاربری الزامی می باشد "),
});
export const authorSignInSchema = Yup.object().shape({
  mobile: Yup.number()
    .typeError("فرمت شماره موبایل اشتباه است")
    .min(11)
    .required("شماره همراه الزامی می باشد "),
  password: Yup.string().required("رمز عبور الزامی می باشد "),
});

export const authorSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("نام الزامی می باشد "),
  lastName: Yup.string().required("نام خانوادگی الزامی می باشد"),
  mobile: Yup.string()
    .typeError("فرمت شماره موبایل اشتباه است")
    .min(11, "تعداد ارقام تلفن همراه کافی نیست")
    .required("شماره همراه الزامی می باشد ")
    .matches(
      /((0?9)|(\+?989))\d{9}/g,
      "شماره همراه معتبر نیست. شماره همراه باید اعداد انگلیسی باشد"
    ),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد "),
  password: Yup.string()
    .required("رمز عبور الزامی می باشد")
    .min(8, "رمز عبور باید بیشتر از ۸ کاراکتر باشد")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
      "رمز عبور باید شامل ‌حروف انگلیسی کوچک و بزرگ و اعداد و کاراکتر های خاص باشد"
    ),
  userName: Yup.string()
    .required("نام کاربری الزامی می باشد ")
    .min(5, "نام کاربری باید بیشتر از ۵ کاراکتر باشد")
    .matches(
      /^[a-zA-Z0-9]*$/g,
      "نام کاربری باید شامل حروف انگلیسی و اعداد باشد"
    ),
});

export const authorSettingInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("نام الزامی می باشد "),
  lastName: Yup.string().required("نام خانوادگی الزامی می باشد"),
  desShort: Yup.string().max(60, "شرح کوتاه حداکثر باید ۶۰ کاراکتر باشد"),
});
export const authorSettingDesLongSchema = Yup.object().shape({
  desLong: Yup.string().max(160, "شرح حداکثر باید ۱۶۰ کاراکتر باشد"),
});

export const authorSettingLinksSchema = Yup.object().shape({
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد "),
  whatsapp: Yup.string().matches(
    /^[a-zA-Z0-9.#?!@$%^&*-_]*$/g,
    "نام کاربری باید شامل حروف انگلیسی،اعداد و کاراکتر های خاص باشد"
  ),
  instagram: Yup.string().matches(
    /^[a-zA-Z0-9.#?!@$%^&*-_]*$/g,
    "نام کاربری باید شامل حروف انگلیسی، اعداد و کاراکتر های خاص باشد"
  ),
});
