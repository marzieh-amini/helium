import imgArticle from "../../../assets/images/post1.png";

const ArticlePreviewImage = ({ image }) => {
  const img = image.length > 5 ? image : imgArticle;
  return (
    <article className="article-prev__image">
      <img alt="post1" src={img} className=" " />
    </article>
  );
};
export default ArticlePreviewImage;
