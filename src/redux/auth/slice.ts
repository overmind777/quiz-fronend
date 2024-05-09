import { createSlice } from "@reduxjs/toolkit";
import { LoginUser, RootState } from "../../types/types";
import { loginUser, registerNewUser } from "./operations";

interface InitialState {
  users: LoginUser[]
}

const initialState: InitialState = {
  users: []
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.fulfilled, (state, { payload }) => {
      state.users.push(payload)
     })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
      state.users.push(payload)
     })
}
})

export const usersReducer = usersSlice.reducer

export const userSelector = (state: RootState) => state.users.users