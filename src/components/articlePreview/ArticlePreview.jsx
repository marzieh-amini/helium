import { Component } from "react";
import {
  ArticlePreviewHeader,
  ArticlePreviewContext,
  ArticlePreviewFootnote,
  ArticlePreviewImage,
} from "./index";

class ArticlePreview extends Component {
  render() {
    const { article } = this.props;

    return (
      <div className="article-prev ">
        <article className="article-prev__content">
          <ArticlePreviewHeader
            authorId={article.authorId}
            articleId={article.id}
          />
          <ArticlePreviewContext
            id={article.id}
            title={article.title}
            description={article.description}
          />
          <ArticlePreviewFootnote
            createDate={article.createDate}
            studyTime={article.studyTime}
            articleTags={article.tags}
          />
        </article>

          <ArticlePreviewImage image={article.articleImage} />
      </div>
    );
  }
}
export default ArticlePreview;
