// userApiSlice.js
import { USER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Existing endpoints
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
    updatedUserProfile: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/updateprofile`,
        method: "PUT",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
    updateUserAdmin: builder.mutation({
      query: ({ id, role }) => ({
        url: `${USER_URL}/updateuserrole/${id}`,
        method: "PUT",
        body: { role },
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `${USER_URL}`,
        method: "GET",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/deleteuser/${id}`,
        method: "DELETE",
      }),
    }),
    changePassword: builder.mutation({
      query: ({ currentPassword, newPassword }) => ({
        url: `${USER_URL}/changepassword`,
        method: "PUT",
        body: { currentPassword, newPassword },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useUserLogoutMutation,
  useUpdatedUserProfileMutation,
  useSignupMutation,
  useChangePasswordMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserAdminMutation,
} = userApiSlice;
