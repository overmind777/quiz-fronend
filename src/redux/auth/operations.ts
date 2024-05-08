import { LoginUser, RegisterUser, User } from './../../types/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from '../../types/types'
import { baseUrl } from '../quizes/operations'

export const registerNewUser = createAsyncThunk<
    User,
    RegisterUser,
    AsyncThunkConfig
>('registerNewUser', async (query, thunkApi) => {

    try {
        const data = await baseUrl.post('/auth/register', query)
      console.log('operations', data)
        return data
    } catch (error) {
        return thunkApi.rejectWithValue((error as Error).message)
    }
})

export const loginUser = createAsyncThunk<LoginUser, User, AsyncThunkConfig>(
    'loginUser',
  async (query, thunkApi) => {
      console.log(query)
    try {
          const data = await baseUrl.post('/auth/login', query)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue((error as Error).message)
        }
    }
)
