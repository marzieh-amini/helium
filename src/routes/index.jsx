import { createBrowserRouter } from "react-router-dom";
import { MainLayout, RegisterLayout, Layouts } from "../template/layouts";
import {
  ArticleView,
  Home,
  Search,
  SignIn,
  SignUp,
  SignUpDone,
  ProfileSetting,
  ArticleCreate,
} from "../pages";
import { Helmet } from "react-helmet-async";
import { NotFound } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <Layouts title={"صفحه ی مورد نظر شما یافت نشد !"}>
        <NotFound
          text={
            "ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس آن را به درستی وارد نکرده باشید"
          }
        />
      </Layouts>
    ),
    children: [
      {
        path: "/",
        element: (
          <Home
            helmet={
              <Helmet>
                <title>هلیوم | صفحه اصلی</title>
              </Helmet>
            }
          />
        ),
      },
      {
        path: "/article/:articleId",
        element: (
          <ArticleView
            helmet={
              <Helmet>
                <title>هلیوم</title>
              </Helmet>
            }
          />
        ),
      },
      {
        path: "/search",
        element: (
          <Search
            helmet={
              <Helmet>
                <title>هلیوم | جستجو </title>
              </Helmet>
            }
          />
        ),
      },
      {
        // private route
        path: "/article/createArticle",
        element: (
          <ArticleCreate
            helmet={
              <Helmet>
                <title>هلیوم | ایجاد مقاله جدید</title>
              </Helmet>
            }
          />
        ),
      },
      {
        // private route
        path: "/profile-setting",
        element: (
          <ProfileSetting
            helmet={
              <Helmet>
                <title>هلیوم | تنظیمات حساب کاربری </title>
              </Helmet>
            }
          />
        ),
      },
    ],
  },
  {
    element: <RegisterLayout />,
    children: [
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signUp/done",
        element: <SignUpDone />,
      },
    ],
  },
]);
