import { format, parseISO } from "date-fns-jalali";
import { Tags } from "../../common";
const ArticlePreviewFootnote = ({ createDate, studyTime, articleTags }) => {
  return (
    <div className="article-prev__footnote">
      <ul>
        <li>
          <span>{format(parseISO(createDate), "d  MMMM  yyyy")}</span>
        </li>
        &bull;
        <li>
          <span>{studyTime} دقیقه مطالعه</span>
        </li>
        &bull;
        <li>
          <Tags articleTags={articleTags} />
        </li>
      </ul>
    </div>
  );
};
export default ArticlePreviewFootnote;
