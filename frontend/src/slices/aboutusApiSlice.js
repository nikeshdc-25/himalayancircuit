import { apiSlice } from "./apiSlice";
import { ABOUTUS_URL, ABOUTUSCONTENT_URL, DELETE_URL, UPLOAD_URL } from "../constant";

const aboutUsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // About Us Member Management
    getMember: builder.query({
      query: () => ({
        url: `${ABOUTUS_URL}`,
        method: "GET",
      }),
    }),
    addMember: builder.mutation({
      query: (data) => ({
        url: `${ABOUTUS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateMember: builder.mutation({
      query: ({ id, data }) => ({
        url: `${ABOUTUS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteMember: builder.mutation({
      query: (id) => ({
        url: `${ABOUTUS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    uploadMemberImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteMemberImage: builder.mutation({
      query: (data) => ({
        url: `${DELETE_URL}/${data}`,
        method: "DELETE",
      }),
    }),
    // About Us Content Management
    getAboutUsContent: builder.query({
      query: () => ({
        url: `${ABOUTUSCONTENT_URL}`,
        method: "GET",
      }),
    }),
    addAboutUsContent: builder.mutation({
      query: (content) => ({
        url: `${ABOUTUSCONTENT_URL}`,
        method: "POST",
        body: { content },
      }),
    }),
  }),
});

export const {
  useGetMemberQuery,
  useAddMemberMutation,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
  useGetAboutUsContentQuery,
  useAddAboutUsContentMutation,
  useUploadMemberImageMutation,
  useDeleteMemberImageMutation,
} = aboutUsApiSlice;
