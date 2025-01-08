import { apiSlice } from "./apiSlice";
import { NEWSLETTER_URL } from "../constant";

const newsletterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribeEmail: builder.mutation({
      query: (data) => ({
        url: NEWSLETTER_URL,
        method: "POST",
        body: data,
      }),
    }),
    getSubscribedEmail: builder.query({
      query: () => ({
        url: NEWSLETTER_URL,
      }),
    }),
  }),
});

export const {
  useSubscribeEmailMutation,
  useGetSubscribedEmailQuery,
} = newsletterApiSlice;
