import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import bcryptjs from "bcryptjs";
import {
  createUserService,
  getUserService,
} from "../../services/usersServices";
import { encodeToken, isAuthenticated } from "../../helpers/authentication";
const bcrypt = bcryptjs;
export const registerUser = createAsyncThunk(
  "/user/registerUser",
  async (initialUser) => {
    //send data to server
    const res = await createUserService(initialUser);
    const token = await encodeToken(res.id);
    localStorage.setItem("jwt-token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(res.data));
    return { user: res.data, token };
  }
);
export const loginUser = createAsyncThunk(
  "/user/loginUser",
  async (dataUser) => {
    //get data of server
    const res = await getUserService(dataUser.id);
    const token = await encodeToken(dataUser.id);
    localStorage.setItem("jwt-token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(dataUser));
    return { user: res.data, token };
  }
);
export const getUserInfo = createAsyncThunk(
  "/user/getUserInfo",
  async (thunkAPI) => {
    const resultAuthenticated = await isAuthenticated();
    if (resultAuthenticated.status) {
      const res = await getUserService(resultAuthenticated.id);
      const token = localStorage.getItem("jwt-token");
      return { user: res.data, token };
    } else {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

const initialState = {
  user: {},
  userToken: null,
  userIsLogin: false,
  error: null,
  status: "idle",
};
const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = {};
      state.userIsLogin = false;
      state.userToken = null;
      localStorage.removeItem("jwt-token");
      localStorage.removeItem("user");
    },
    getUserInfoFromLocal: (state, action) => {
      const userJson = localStorage.getItem("user");
      if (userJson) {
        state.user = JSON.parse(userJson);
        state.userIsLogin = true;
      }
    },
    updateUserInfo: (state, action) => {
      const { payload } = action;
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userToken = action.payload.token;
        state.userIsLogin = true;
        state.status = "completed";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        console.log("error >>>>>: ", action.error.message);
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userToken = action.payload.token;
        state.userIsLogin = true;
        state.status = "completed";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        console.log("error >>>>>: ", action.error.message);
        state.error = action.error.message;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userToken = action.payload.token;
        state.userIsLogin = true;
        state.status = "completed";
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.status = "failed";
        console.log("error >>>>>: ", action.error);
        state.error = action.error.message;
      });
  },
});
export const selectUser = (state) => state.authUser.user;
export const selectIsLogin = (state) => state.authUser.userIsLogin;
export const selectToken = (state) => state.authUser.userToken;
export const selectAuthStatus = (state) => state.authUser.status;
export const { logoutUser, getUserInfoFromLocal, updateUserInfo } =
  authUserSlice.actions;
export default authUserSlice.reducer;
