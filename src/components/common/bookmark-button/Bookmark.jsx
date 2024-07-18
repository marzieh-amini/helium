import { useSelector } from "react-redux";
import addBookmark from "../../../assets/images/archive-add1.png";
import isBookmark from "../../../assets/images/archive-add.png";
import {
  selectUserBookmarkArticle,
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
  useGetAllBookmarksQuery,
} from "../../../redux/reducers/bookmarks";
import { useLocation, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { selectUser } from "../../../redux/reducers/authUserSlice";
const Bookmark = ({ articleId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const infoUserLogin = useSelector(selectUser);
  //send requset for get data from server or cash
  const { data } = useGetAllBookmarksQuery();
  //hook bookmark article
  const [addbookmark] = useAddBookmarkMutation();
  //hook delete bookmark article
  const [unbookmark] = useDeleteBookmarkMutation();

  //if user bookmark article ---> get data from cach
  const userBookmarkArticle = useSelector((state) =>
    selectUserBookmarkArticle(state, infoUserLogin.id, articleId)
  );

  const bookmarkArticle = async () => {
    //check user is login => false --->redirect to "signIn"
    if (Object.keys(infoUserLogin).length === 0) {
      //set state for redirect user to this page after login
      navigate("/signIn", { state: { from: `${location.pathname}` } });
    } else {
      const initialBookmark = {
        id: nanoid(),
        userId: infoUserLogin.id,
        articleId,
      };
      //send request to server
      await addbookmark(initialBookmark).unwrap();
    }
  };
  const unBookmarkArticle = async () => {
    await unbookmark(userBookmarkArticle.id);
  };

  return (
    <>
      {userBookmarkArticle ? (
        <button onClick={unBookmarkArticle} className="btn btn-archive-add">
          <img src={isBookmark} alt="unbookmark" />
        </button>
      ) : (
        <button onClick={bookmarkArticle} className="btn btn-archive-add">
          <img src={addBookmark} alt="bookmark" />
        </button>
      )}
    </>
  );
};

export default Bookmark;
