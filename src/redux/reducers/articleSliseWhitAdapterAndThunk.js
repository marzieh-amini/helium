import {
    createAsyncThunk,
    createEntityAdapter,
    createSelector,
    createSlice,
  } from "@reduxjs/toolkit";
  import {
    createArticleService,
    getAllTagsService,
    getArticleService,
    getَAllArticlesService,
  } from "../../services/articlesServices";
  
  export const getAllArticles = createAsyncThunk(
    "/articles/getAllArticles",
    async () => {
      const res = await getَAllArticlesService();
      return res.data;
    }
  );
  export const getArticleById = createAsyncThunk(
    "/articles/getArticleById",
    async (id) => {
      const res = await getArticleService(id);
      return res.data;
    }
  );
  export const getAllTags = createAsyncThunk("/articles/getAllTags", async () => {
    const res = await getAllTagsService();
    return res.data;
  });
  
  export const createArticle = createAsyncThunk(
    "/article/createAricle",
    async (initialArticle) => {
      const res = await createArticleService(initialArticle);
      return res.data;
    }
  );
  const articleAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.createDate.localeCompare(a.createDate),
  });
  const initialState = articleAdapter.getInitialState({
    article: {},
    tags: [],
    error: "",
    status: "idle",
  });
  
  
  const articlesSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllArticles.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(getAllArticles.fulfilled, (state, action) => {
          articleAdapter.upsertMany(state, action.payload);
          state.status = "completed";
        })
        .addCase(getArticleById.fulfilled, (state, action) => {
          state.article = action.payload;
        })
        .addCase(getAllTags.fulfilled, (state, action) => {
          state.tags = action.payload;
        })
        .addCase(createArticle.fulfilled, (state, action) => {
          articleAdapter.addOne;
        });
    },
  });
  export const {
    selectAll: selectAllArticles,
    selectById: selectArticleById,
    selectIds: selectArticleIds,
  } = articleAdapter.getSelectors((state) => state.articles);
  
  export const selectArticle = (state) => state.articles.article;
  export const selectAllTags = (state) => state.articles.tags;
  export const selectArticleTags = createSelector(
    [selectAllTags, (_, articleTags) => articleTags],
    (tags, articleTags) => tags.filter((tag) => articleTags.includes(tag.id))
  );
  export const selectStatus = (state) => state.articles.status;
  
  export default articlesSlice.reducer;
  