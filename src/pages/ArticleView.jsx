import { useParams } from "react-router-dom";
import { Loading, NotFound } from "../components";
import { ArticleViewContent, ArticleViewHeader, ArticleViewImage } from "../components/pages";
import { useGetArticleQuery } from "../api/apislice";
const ArticleView = () => {
  const { articleId } = useParams();
  const {data : article,isFetching,isSuccess} = useGetArticleQuery(articleId)
 
  return (
    <div className="article-view">
      {isFetching ? (
        <Loading />
      ) : (
        <>
          {isSuccess && Object.keys(article).length > 0 ? (
            <>
              <ArticleViewHeader
                title={article.title}
                authorId={article.authorId}
                articleTags={article.tags}
                createDate={article.createDate}
                studyTime={article.studyTime}
              />
              <ArticleViewImage image={article.articleImage} />
              <ArticleViewContent 
                description={article.description} />
            </>
          ) : (
            <NotFound/>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleView;
