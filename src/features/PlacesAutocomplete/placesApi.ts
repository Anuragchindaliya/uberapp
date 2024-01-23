import { serpApi } from "../../app/services";
export interface PlacesRes {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  search_information: SearchInformation;
  suggestions: Suggestion[];
}

export interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_maps_autocomplete_url: string;
  raw_html_file: string;
  prettify_html_file: string;
  total_time_taken: number;
}

export interface SearchParameters {
  engine: string;
  q: string;
  gl: string;
  hl: string;
  ll: string;
}

export interface SearchInformation {
  query_displayed: string;
}

export interface Suggestion {
  value: string;
  serpapi_link: string;
  maps_serpapi_link: string;
  type: string;
  subtext?: string;
  latitude?: number;
  longitude?: number;
  data_id?: string;
  reviews_serpapi_link?: string;
  photos_serpapi_link?: string;
}

// Define a service using a base URL and expected endpoints
// export const searchApi = createApi({
//   reducerPath: "searchApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://serpapi.com" }),
//   endpoints: (builder) => ({
//     getPlaceByName: builder.mutation<PlacesRes, string>({
//       query: (query) => {
//         return {
//           url: "search.json",
//           params: {
//             engine: "google_maps_autocomplete",
//             api_key:
//               "dddabdf5ca79b4905db09e3091c391c0630d55a37d82946db1ef9692a01945cb",
//             q: query,
//             hl: "en",
//             gl: "us",
//             ll: "@61.1289956,19.7792201,15.1z",
//             // 21.1289956 82.7792201 india
//           },
//         };
//       },
//     }),
//   }),
// });
const placeApi = serpApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlaceByName: builder.mutation<PlacesRes, string>({
      query: (query) => {
        return {
          url: "search.json",
          params: {
            engine: "google_maps_autocomplete",
            api_key:
              "dddabdf5ca79b4905db09e3091c391c0630d55a37d82946db1ef9692a01945cb",
            q: query,
            hl: "en",
            gl: "us",
            ll: "@61.1289956,19.7792201,15.1z",
            // 21.1289956 82.7792201 india
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPlaceByNameMutation } = placeApi;
