import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: null,
    token: null
}

export const AuthSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify({
                status: action.payload.status,
                token: action.payload.token
            }))
            state.status = action.payload.status
            state.token = action.payload.token
        },
        logout: (state) => {
            localStorage.clear()
            state.status = null
            state.token = null
        }
    }
})

export const { setUser, logout, } = AuthSlice.actions
export default AuthSlice.reducer