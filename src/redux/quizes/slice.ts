import { createSlice } from '@reduxjs/toolkit'
import { getAllQuizes } from './operations'
import { QuizBody, RootState } from '../../types/types'

interface InitialState {
    listQuizes: QuizBody[]
}

const initialState: InitialState = {
    listQuizes: [],
}

const quizesSlice = createSlice({
    name: 'quizes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllQuizes.fulfilled, (state, { payload }) => {
            state.listQuizes = payload
        })
    },
})

export const quizesReducer = quizesSlice.reducer

export const quizSelector = (state: RootState) => state.quizes.listQuizes
