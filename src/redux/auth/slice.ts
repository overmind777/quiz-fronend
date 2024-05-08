import { createSlice } from "@reduxjs/toolkit";
import { RootState, User } from "../../types/types";
import { registerNewUser } from "./operations";

interface InitialState {
  users: User[]
}

const initialState: InitialState = {
  users: []
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerNewUser.fulfilled, (state, { payload }) => {
      state.users.push(payload)
     })
}
})

export const usersReducer = usersSlice.reducer

export const userSelector = (state: RootState) => state.users.users