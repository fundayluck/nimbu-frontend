import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend-nimbu.cyclic.app',
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'api/login',
                method: 'POST',
                body,
            }),
        }),
    })
})

export const { useLoginMutation } = authApi
export { authApi }