import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quizesReducer } from "./quizes/slice";

const rootReducer = combineReducers({
  quizes: quizesReducer,
})

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [
    //                 FLUSH,
    //                 REHYDRATE,
    //                 PAUSE,
    //                 PERSIST,
    //                 PURGE,
    //                 REGISTER,
    //             ],
    //         },
    //     }),
})

export default store;