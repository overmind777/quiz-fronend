import { createSlice } from "@reduxjs/toolkit"
import { getUserInfo } from "./operations"

export interface IPassedQuizzes {
    quizId: string
    quantityQuestions: number
    correctAnswers: number
    rating: number
}

interface User {
    id: string
    name: string | undefined
    email: string
    gravatarURL?: string
    avatar: string
    favorites: string[]
    totalAnswers?: number
    totalQuestions?: number
    average?: number
    passedQuizzes?: IPassedQuizzes[]
}

interface UserState {
    user: User
    error: string | null
    isLoadingUser: boolean
    isLoadingAvatar: boolean
}

const initialState: UserState = {
    user: {
        id: '',
        name: '',
        email: '',
        avatar: '',
        favorites: [],
        totalAnswers: 0,
        totalQuestions: 0,
        average: 0,
        passedQuizzes: [],
    },
    error: null,
    isLoadingUser: false,
    isLoadingAvatar: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteFavorite: (state, { payload }) => {
            const newState = state.user.favorites.filter(
                (favorite) => favorite !== payload
            )
            state.user.favorites = newState
        },
        addFavorite: (state, { payload }) => {
            state.user.favorites = [...state.user.favorites, payload]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.fulfilled, (state, {payload})=>{console.log(state, payload)})
    },
})

export const userReducer = userSlice.reducer