import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./serverConfig";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
});

export const serpApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});
