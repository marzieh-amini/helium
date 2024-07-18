import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    articles: [],
    authors: [],
    tags: [],
  },

  filtred: {
    articles: [],
    authors: [],
    tags: [],
  },
  status: "idle",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData:{
      reducer(state, action) {
        state.data = action.payload;
      },prepare(data){
        const {articles,authors,tags} = data;
        const sortArticle = articles.slice().sort((a, b) =>  b.createDate.localeCompare(a.createDate))
        return {payload : { articles : [...sortArticle], authors ,tags}}
      }
    },
    filteredData: (state, action) => {
      const { searchParams } = action.payload;
      if (searchParams?.length <= 0 || searchParams === "null" || searchParams === "undefined" || !searchParams) {
        state.filtred = { ...state.data };
      } else {
        const filtredArticles = state.data.articles.filter((a) => {
          return a["title"].toLowerCase().includes(searchParams.toLowerCase());
        });
        const filtredAuthors = state.data.authors.filter((a) => {
          return (
            a["firstName"].toLowerCase().includes(searchParams.toLowerCase()) ||
            a["lastName"].toLowerCase().includes(searchParams.toLowerCase())
          );
        });
        const filtredTags = state.data.tags.filter((t) => {
          return t["name"].toLowerCase().includes(searchParams.toLowerCase());
        });
        state.filtred = {
          articles: [...filtredArticles],
          authors: [...filtredAuthors],
          tags: [...filtredTags],
        };
      }
      state.status = "completed";
    },
    changedStatus : (state,action) =>{
        state.status = action.payload
    }
  },
});
export const { setData, filteredData ,changedStatus } = searchSlice.actions;

export const selectStatus = (state) => state.search.status;
export const selectResultFilter = (state) => state.search.filtred; 
export const selectData = (state)=> state.search.data
export default searchSlice.reducer;
