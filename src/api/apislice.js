import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["ARTICLE","AUTHORSETTING","FOLLOWER","BOOKMARK"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => "/articles",
      providesTags: (result = [],error,arg)=>[
        "ARTICLE",
        ...result.map(({id})=>({type : "ARTICLE",id}))
      ],
    }),
    getArticle: builder.query({
      query: (initialArticleId) => `/articles/${initialArticleId}`,
      providesTags : (result , error,arg)=>[{type:"ARTICLE",id:arg}]
    }),
    createArticle: builder.mutation({
      query: (initialArticle) => ({
        url: "/articles",
        method: "POST",
        body: initialArticle,
      }),
      invalidatesTags: ["ARTICLE"],
    }),
    updateArticle : builder.mutation({
      query : (article) => ({
        url :  `/articles/${article.id}`,
        method : "PUT",
        body:article
      }),
      invalidatesTags :(result,error,arg)=>[{type:"ARTICLE",id:arg.id}]
    }),
    getTags: builder.query({
      query: () => "/tags",
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetTagsQuery,
  useGetArticleQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation
} = apiSlice;
