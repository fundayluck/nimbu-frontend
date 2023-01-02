import { configureStore } from "@reduxjs/toolkit"
import { authApi } from './apis/authApi'
import authReducer from './slices/AuthSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        authUser: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(authApi.middleware)
    }
})

setupListeners(store.dispatch)

export { useLoginMutation } from './apis/authApi'