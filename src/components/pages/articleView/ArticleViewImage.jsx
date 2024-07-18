import imgArticle from "../../../assets/images/post1.png";

const ArticleViewImage = ({ image }) => {
  const img = image.length > 5 ? image : imgArticle;
  return (
    <div className="article-view__image">
      <img alt="image" src={img} />
    </div>
  );
};

export default ArticleViewImage;
