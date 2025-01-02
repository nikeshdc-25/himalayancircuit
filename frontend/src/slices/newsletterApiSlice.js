import { apiSlice } from "./apiSlice";
import { NEWSLETTER_URL } from "../constant";

const newsletterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribeEmail: builder.mutation({
      query: (data) => ({
        url: `${NEWSLETTER_URL}/subscribe`,
        method: "POST",
        body: data,
      }),
    }),
    getSubscribedEmails: builder.query({
      query: () => ({
        url: `${NEWSLETTER_URL}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSubscribeEmailMutation,
  useGetSubscribedEmailsQuery,
} = newsletterApiSlice;
