import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./serverConfig";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
});

export const serpApi = createApi({
  reducerPath: "serpApi",
  baseQuery,
  endpoints: () => ({}),
});

export const jsearchApi = createApi({
  reducerPath: "jsearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsearch.p.rapidapi.com",
    prepareHeaders: (header) => {
      // 'X-RapidAPI-Key': 'bf227dcbc0msh3afe5b625f5d1c2p1a1af4jsn55528326c2f2',
      // 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      header.set(
        "X-RapidAPI-Key",
        "bf227dcbc0msh3afe5b625f5d1c2p1a1af4jsn55528326c2f2"
      );
      header.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");
      return header;
    },
  }),
  endpoints: () => ({}),
});
