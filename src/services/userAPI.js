import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUserByid: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = UserApi;
