import { apiSlice } from "./apiSlice";
import { PACKAGE_URL } from "../constant";

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
    updatePackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `${PACKAGE_URL}/${id}`,
        method: "PUT",
        body: data,
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
} = packageApiSlice;
