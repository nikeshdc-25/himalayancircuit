import { apiSlice } from "./apiSlice";
import { ABOUTUS_URL } from "../constant";

const aboutUsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => ({
        url: `${ABOUTUS_URL}`,
        method: "GET",
      }),
    }),
    addAboutUs: builder.mutation({
      query: (data) => ({
        url: `${ABOUTUS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateAboutUs: builder.mutation({
      query: ({ id, data }) => ({
        url: `${ABOUTUS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteAboutUs: builder.mutation({
      query: (id) => ({
        url: `${ABOUTUS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAboutUsQuery,
  useAddAboutUsMutation,
  useUpdateAboutUsMutation,
  useDeleteAboutUsMutation,
} = aboutUsApiSlice;
