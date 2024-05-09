import { createSlice } from '@reduxjs/toolkit'
import { User, RootState } from '../../types/types'
import { loginUser, registerNewUser } from './operations'

interface InitialState {
  user: User
  accessToken: string
  isLoggedIn: boolean
}

const initialState: InitialState = {
    user: {
        name: '',
        email: '',
    },
    accessToken: '',
    isLoggedIn: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(registerNewUser.fulfilled, (state, { payload }) => {
              console.log(payload)
                state.user = payload
            })
          .addCase(loginUser.fulfilled, (state, { payload }) => {
            state.user.name = payload.name
            state.user.email = payload.email
            state.accessToken = payload.accessToken
            state.isLoggedIn = true
            })
    },
})

export const usersReducer = usersSlice.reducer

export const userSelector = (state: RootState) => state.users
