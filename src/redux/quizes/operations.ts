import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AsyncThunkConfig, Query, QuizBody } from '../types'

const baseUrl = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllQuizes = createAsyncThunk<QuizBody[], Query, AsyncThunkConfig>(
    'getAllQuizes',
    async (query, thunkApi) => {
        const { page, pageSize } = query
        try {
          const { data } = await baseUrl.get('/quiz', {
            params: {
              page,
              pageSize,
            }
          })
            return data 
        } catch (error: unknown) {
            return thunkApi.rejectWithValue((error as Error).message)
        }
    }
)


