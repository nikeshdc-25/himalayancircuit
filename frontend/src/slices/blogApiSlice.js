import { BLOG_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getBlogs: builder.query({
        query: () => ({
          url: `${BLOG_URL}`,
          method: "GET",
        }),
      }),
      addBlog: builder.mutation({
        query: (data) => ({
          url: `${BLOG_URL}`,
          method: "POST",
          body: data,
        }),
      }),
      updateBlog: builder.mutation({
        query: ({ id, data }) => ({
          url: `${BLOG_URL}/${id}`,
          method: "PUT",
          body: data,
        }),
      }),
      deleteBlog: builder.mutation({
        query: (id) => ({
          url: `${BLOG_URL}/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });
  
  export const {
    useGetBlogsQuery,
    useAddBlogMutation,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
  } = blogApiSlice;