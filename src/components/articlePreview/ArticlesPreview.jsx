import { Component } from "react";
import { ArticlePreview } from "./index";

class ArticlesPreview extends Component {
  render() {
    const { currentArticles } = this.props;
    return (
      <>
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <ArticlePreview article={article} key={article.id} />
          ))
        ) : (
          <div className="notFound">
            <h1> متاسفانه مقاله ای وجود ندارد</h1>
          </div>
        )}
      </>
    );
  }
}

export default ArticlesPreview;
