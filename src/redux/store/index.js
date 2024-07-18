import {configureStore} from "@reduxjs/toolkit"

import articlesReducer from "../reducers/articlesSlice"
import authorsReducer, { getAllAuthors } from "../reducers/authorsSlice"
import searchReducer from "../reducers/searchSlice"
import followersReducer, { extendApislice } from "../reducers/followersSlice"
import bookmarksReducer from "../reducers/bookmarks"
import authUserReducer, { getUserInfoFromLocal } from "../reducers/authUserSlice"

import { apiSlice } from "../../api/apislice"
export const store = configureStore({
    reducer : {
        articles : articlesReducer,
        authors : authorsReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
        search : searchReducer,
        followers: followersReducer,
        bookmarks:bookmarksReducer,
        authUser :authUserReducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(
        apiSlice.middleware
    )
})
store.dispatch(getAllAuthors())
store.dispatch(getUserInfoFromLocal())
store.dispatch(extendApislice.endpoints.getAllFollowers.initiate())
