import { ErrorMessage, Field, Form, Formik } from "formik";
import { articleSchema } from "../../../helpers/validations/articleValidations";
import UploadImage from "./UploadImage";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/authUserSlice";
const ArticleCreateForm = ({
  tagsArticle,
  tagsOption,
  createNewArticleForm,
  removeTagsArticle,
  clickSelectTags,
}) => {
  const userInfo = useSelector(selectUser);
  return (
    <>
      <Formik
        initialValues={{
          authorId: userInfo.id,
          title: "",
          description: "",
          articleImage: "",
          createDate: new Date().toISOString(),
          studyTime: "",
          tags: "",
          id: nanoid(),
        }}
        validationSchema={articleSchema}
        onSubmit={(values) => {
          if (tagsArticle.length === 0) {
            values.tags = "";
          }
          createNewArticleForm(values);
        }}
      >
        {(formik) => (
          <Form className="form">
            <UploadImage />
            <div>
              <h2>تصویر مورد نظر خود را آپلود کنید</h2>
              <Field name="articleImage" type="text" />
              <ErrorMessage
                name="articleImage"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
            </div>
            <div className="input-box">
              <Field
                name="title"
                type="text "
                placeholder="عنوان مقاله خود را وارد کنید"
              />
              <ErrorMessage
                name="title"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
            </div>
            <div className="input-box">
              <Field
                as="textarea"
                rows="6"
                name="description"
                type="text"
                placeholder="متن اصلی خود را وارد کنید..."
              />
              <ErrorMessage
                name="description"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
            </div>
            <div className="input-box">
              <Field
                name="studyTime"
                type="number"
                placeholder="مدت زمان مطالعه مقاله"
              />
              <ErrorMessage
                name="studyTime"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
            </div>
            <div className="input-box">
              <Field
                as="select"
                name="tags"
                onClick={() => {
                  console.log("onClick*********", formik.values.tags);
                  if (formik.values.tags) {
                    clickSelectTags(formik.values.tags);
                  }
                }}
              >
                <option value="">انتخاب برچسب</option>
                {tagsOption.length > 0 &&
                  tagsOption.map((tag) => (
                    <option value={tag.id} key={tag.id}>
                      {tag.name}
                    </option>
                  ))}
              </Field>
              <ErrorMessage
                name="tags"
                render={(e) => <h3 className="error-message">{e}</h3>}
              />
              <br />
              <div className="tags-selected">
                {tagsArticle.length > 0 &&
                  tagsArticle.map((tag) => (
                    <span
                      className="tag"
                      key={tag}
                      onClick={() => {
                        formik.values.tags = removeTagsArticle(
                          tag,
                          formik.values.tags
                        );
                      }}
                    >
                      {tagsOption.find((tags) => tags.id === tag).name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="submit-box">
              <input
                className="btn btn__submit"
                type="submit"
                value="انتشار مطلب"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ArticleCreateForm;
