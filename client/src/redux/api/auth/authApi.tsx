import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/auth/" }),

  endpoints: (builder) => ({
    
    login: builder.mutation({
      query: (userData) => ({
        url: "login",
        method: "POST",
        body: userData
      })
    }),

  }),
});

export const {useLoginMutation} = authApi;
