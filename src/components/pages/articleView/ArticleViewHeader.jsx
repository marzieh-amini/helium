import HeaderAuthor from "./sections/HeaderAuthor";
import HeaderFootnote from "./sections/HeaderFootnote";
import HeaderTitle from "./sections/HeaderTitle";

const ArticleViewHeader = ({
  title,
  authorId,
  createDate,
  studyTime,
  articleTags,
}) => {
  return (
    <>
      <HeaderAuthor authorId={authorId} />
      <HeaderTitle title={title} />
      <HeaderFootnote
        articleTags={JSON.parse(articleTags)}
        createDate={createDate}
        studyTime={studyTime}
      />
    </>
  );
};

export default ArticleViewHeader;
