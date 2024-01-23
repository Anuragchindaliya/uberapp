import { serpApi } from "../../app/services";

export interface RideRes {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  places_info: PlacesInfo[];
  directions: Direction[];
  durations: Duration[];
}

export interface SearchMetadata {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_maps_directions_url: string;
  raw_html_file: string;
  prettify_html_file: string;
  total_time_taken: number;
}

export interface SearchParameters {
  engine: string;
  hl: string;
  start_addr: string;
  end_addr: string;
}

export interface PlacesInfo {
  address: string;
  data_id: string;
  gps_coordinates: GpsCoordinates;
}

export interface GpsCoordinates {
  latitude: number;
  longitude: number;
}

export interface Direction {
  travel_mode: string;
  via: string;
  distance: number;
  duration: number;
  typical_duration_range: string;
  formatted_distance: string;
  formatted_duration: string;
  extensions?: string[];
  trips: Trip[];
}

export interface Trip {
  travel_mode: string;
  title?: string;
  distance: number;
  duration: number;
  formatted_distance: string;
  formatted_duration: string;
  details: Detail[];
}

export interface Detail {
  title: string;
  action: string;
  distance: number;
  duration: number;
  formatted_distance: string;
  formatted_duration: string;
  geo_photo?: string;
  gps_coordinates?: GpsCoordinates2;
  extensions?: string[];
}

export interface GpsCoordinates2 {
  latitude: number;
  longitude: number;
}

export interface Duration {
  travel_mode: string;
  duration: number;
  formatted_duration: string;
}

// Define a service using a base URL and expected endpoints
export const rideApi = serpApi.injectEndpoints({
  endpoints: (builder) => ({
    getDurationByAddr: builder.query<
      RideRes,
      { start_addr: string; end_addr: string }
    >({
      query: ({ start_addr, end_addr }) => {
        return {
          url: "search.json",
          params: {
            engine: "google_maps_directions",
            api_key:
              "dddabdf5ca79b4905db09e3091c391c0630d55a37d82946db1ef9692a01945cb",
            start_addr: start_addr,
            end_addr: end_addr,
            // 21.1289956 82.7792201 india
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDurationByAddrQuery } = rideApi;
