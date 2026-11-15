import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts"
    }),
    getPostsById: builder.query({
      query: (id) => `posts/${id}`
    }),
  })
})

export const {useGetAllPostsQuery, useGetPostsById} = postsApi