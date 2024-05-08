import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AsyncThunkConfig, Query, QuizBody } from '../../types/types'

export const baseUrl = axios.create({
    baseURL: 'http://localhost:3000/api',

    // baseURL: 'http://192.168.88.102:3000/api',
})

export const getAllQuizes = createAsyncThunk<
    QuizBody[],
    Query,
    AsyncThunkConfig
>('getAllQuizes', async (query, thunkApi) => {
    const { page, pageSize, ageGroup } = query
    try {
        const { data } = await baseUrl.get('/quiz', {
            params: {
                page,
                pageSize,
                ageGroup,
            },
        })
        return data
    } catch (error: unknown) {
        return thunkApi.rejectWithValue((error as Error).message)
    }
})
