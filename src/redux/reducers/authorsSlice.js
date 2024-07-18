import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {
  getAllUsersService,
  updateUserService,
} from "../../services/usersServices";
import { updateUserInfo } from "./authUserSlice";

export const getAllAuthors = createAsyncThunk(
  "/authors/getAllAuthors",
  async () => {
    const res = await getAllUsersService();
    return res.data;
  }
);
export const updateAuthor = createAsyncThunk(
  "/author/updateAuthor",
  async (dataUser,thunkAPI) => {
    const {data} = await updateUserService(dataUser);
    //update user info in localStorage
    thunkAPI.dispatch(updateUserInfo(data))
    return data;
  }
);

const authorAdapter = createEntityAdapter();
const initialState = authorAdapter.getInitialState({
  error: null,
  status: "idle",
});

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAuthors.fulfilled, (state, action) => {
        authorAdapter.upsertMany(state, action.payload);
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        authorAdapter.updateOne;
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        console.log(action.error);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {
  selectAll: selectAllAuthors,
  selectById: selectAuthorById,
  selectIds: selectAuthorIds,
} = authorAdapter.getSelectors((state) => state.authors);

export const selectStatus = (state) => state.authors.status;
export const selectError = (state) => state.authors.error;
export default authorsSlice.reducer;
