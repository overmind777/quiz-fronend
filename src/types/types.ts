import store from '../redux/store'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface AsyncThunkConfig {
    state: RootState
    dispatch: AppDispatch
    rejectValue: string
}

export interface Query {
    page?: number
    pageSize?: number
    ageGroup?: string
}

export interface QuizBody {
    id: number
    title: string
    category: string
    questions: Question[]
    owner: string
    rating: number
    finished: number
    ratingQuantity: number
    ageGroup: string
    background: string
    createdAt: string
    updatedAt: string
}

export interface Question {
    text: string
}

export interface RegisterUser {
    name: string
    email: string
    password: string
}

export interface LoginUser {
    name: string
    email: string
    accessToken: string
}
