import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apislice";

const followersAdapter = createEntityAdapter();
const initialState = followersAdapter.getInitialState();

export const extendApislice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFollowers: builder.query({
      query: () => "/followers",
      transformResponse: (responseData) => {
        return followersAdapter.setAll(initialState, responseData);
      },
      providesTags:["FOLLOWER"]
    }),
    addNewFollower:builder.mutation({
      query:(initialFollower)=>({
        url:"/followers",
        method:"POST",
        body:initialFollower
      }),
      invalidatesTags:["FOLLOWER"]
    }),
    deleteFollower:builder.mutation({
      query : (id)=>({
        url:`/followers/${id}`,
        method:"DELETE"
      }),
      invalidatesTags:["FOLLOWER"]
    })
  }),
});
export const selectFollowersResult =
  extendApislice.endpoints.getAllFollowers.select();
const selectFollowersData = createSelector(
  selectFollowersResult,
  (result) => result.data
);

const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {},
});
export const { selectAll: selectAllFollowrs } = followersAdapter.getSelectors(
  (state) => selectFollowersData(state) ?? initialState
);
export const selectUserFollower = createSelector(
  selectAllFollowrs,
  (_, userId) => userId,
  (_, userId, authorId) => authorId,
  (data,userId,authorId)=> data?.find((f) => f.userId === userId && f.authorId == authorId)

);
export const { useGetAllFollowersQuery ,useAddNewFollowerMutation,useDeleteFollowerMutation} = extendApislice;
export default followersSlice.reducer;
