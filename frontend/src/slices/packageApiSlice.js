import { apiSlice } from "./apiSlice";
import {  DELETE_URL, PACKAGE_URL, UPLOAD_URL } from "../constant";

const packageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: PACKAGE_URL,
        params: { keyword, pageNumber }, // /api/v1/package?pageNumber=2&keyword=nuwakot
      }),
      providesTags: ["Package"],
      keepUnusedDataFor: 5,
    }),
    getSinglePackage: builder.query({
      query: (id) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "GET",
      }),
    }),
    addPackage: builder.mutation({
      query: (data) => ({
        url: PACKAGE_URL,
        method: "POST",
        body: data,
      }),
    }),
    getPackagesByCategory: builder.query({
      query: (category) => ({
        url: `${PACKAGE_URL}/category/${category}`,
        method: "GET",
      }),
    }),
    updatePackage: builder.mutation({
      query: ( data ) => ({
        url: `${PACKAGE_URL}/${data._id}`,
        method: "PUT",
        body: data,
      }),
    }),
    uploadPackageImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: "POST",
        body: data,
      }),
    }),
    deletePackageImage: builder.mutation({
      query: (data) => ({
        url: `${DELETE_URL}/${data}`,
        method: "DELETE",
      }),
    }),    
    deletePackage: builder.mutation({
      query: (id) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useGetSinglePackageQuery,
  useAddPackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
  useUploadPackageImageMutation,
  useDeletePackageImageMutation,
} = packageApiSlice;
