import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apislice";

export const extendApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookmarks: builder.query({
      query: () => "/bookmarks",
      providesTags: ["BOOKMARK"],
    }),
    addBookmark: builder.mutation({
      query: (initialBookmark) => ({
        url: "/bookmarks",
        method: "POST",
        body: initialBookmark,
      }),
      invalidatesTags: ["BOOKMARK"],
    }),
    deleteBookmark: builder.mutation({
      query: (bookmarkId) => ({
        url: `/bookmarks/${bookmarkId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BOOKMARK"],
    }),
  }),
});

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {},
  reducers: {},
});
export const selectBookmarksResult =
  extendApislice.endpoints.getAllBookmarks.select();
export const selectBookmarkData = createSelector(
  selectBookmarksResult,
  (result) => result?.data
);
export const selectAllBookmarks = (state) => selectBookmarkData(state);
export const selectUserBookmarkArticle = createSelector(
  selectAllBookmarks,
  (_, userId) => userId,
  (_, userId, articleId) => articleId,
  (bookmarks,userId,articleId)=>bookmarks?.find(b=>b.userId === userId && b.articleId === articleId)
);
export const {
  useAddBookmarkMutation,
  useGetAllBookmarksQuery,
  useDeleteBookmarkMutation,
} = extendApislice;

export default bookmarksSlice.reducer;
