// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({baseUrl: 'http://api.weatherapi.com/v1'}),
//   endpoints: builder => ({
//     getMoviePlot: builder.query({
//       query: (res) => ({
//         url: '/current.json?key=c6998a9dd63643ecbd2180838221912&q=London&aqi=no',
//       }),
//     }),
//   }),
// });

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://www.omdbapi.com'}),
  endpoints: builder => ({
    getMoviePlot: builder.query({
      query: () => ({
        url: '/?apikey=9e1a811a&t=bewitched',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMoviePlotQuery} = api;
