import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import edit from "../assets/images/edit-2.png";
import { Loading } from "../components";
import { ArticleCreateForm } from "../components/pages";
import { useCreateArticleMutation, useGetTagsQuery } from "../api/apislice";
import PrivateRoute from "../components/private-route/PrivateRoute";
const ArticleCreate = ({ helmet }) => {
  const [createArticle, { isLoading }] = useCreateArticleMutation();
  const { data: tagsOption = [] } = useGetTagsQuery();
  const [articleContent, setArticleContent] = useState({
    writerId: "",
    title: "",
    description: "",
    ArticleImage: "",
    createDate: "",
    studyTime: "",
    tags: [],
  });
  const [tagsArticle, setTagsArticle] = useState([]);
  const navigate = useNavigate();

  const clickSelectTags = (value) => {
    if (!tagsArticle.includes(value)) {
      setTagsArticle([...tagsArticle, value]);
    }
  };
  const changeSelectTags = (event, formik) => {
    let val = Number(event.target.value);
    if (!tagsArticle.includes(val)) {
      setTagsArticle((tagsArticle) => {
        formik.tags = val;
        return tagsArticle.push(val);
      });
    }
    return tagsArticle[tagsArticle.length - 1];
  };

  const removeTagsArticle = (id, formikTags) => {
    if (tagsArticle.includes(id)) {
      const filter = tagsArticle.filter((tag) => tag !== id);
      setTagsArticle([...filter]);
      if (formikTags === id) {
        formikTags = filter.length > 0 ? filter[filter.length - 1] : "";
      }
    }
    return formikTags;
  };
  const createNewArticleForm = async (values, file, image) => {
    try {
      values = {
        ...values,
        title: values.title.trim(),
        description: values.description.trim(),
        studyTime: JSON.stringify(values.studyTime),
        tags: JSON.stringify([...tagsArticle]),
        imageData: file,
        img: image,
      };
      console.log("createNewArticleForm", values);
      await createArticle(values).unwrap();
      if (!isLoading) {
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className=" createArticle">
      {helmet}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="createArticle__container">
          <h1 className="createArticle__container-titel">
            {" "}
            <img src={edit} alt="edit" />
            <span>ایجاد مقاله جدید </span>
          </h1>
          <section className="createArticle__container-content">
            <ArticleCreateForm
              clickSelectTags={clickSelectTags}
              changeSelectTags={changeSelectTags}
              removeTagsArticle={removeTagsArticle}
              setTagsArticle={setTagsArticle}
              tagsArticle={tagsArticle}
              articleContent={articleContent}
              createNewArticleForm={createNewArticleForm}
              tagsOption={tagsOption}
              setArticleContent={setArticleContent}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default PrivateRoute(ArticleCreate);
