import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "8a7ba9a7ebmsh3d82ff0e32e10b5p15fb7bjsnc237c013e1e2"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/v1/charts/world" }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ id }) => `https://shazam.p.rapidapi.com/artists/get-details?id=${id}`,
    }),
    getCountryTracks: builder.query({
      query: ({ countrycode}) => `https://shazam.p.rapidapi.com/charts/track?country=${countrycode}&limit=10`,
    }),
    getSearchedTracks: builder.query({
      query: ({searchTerm}) => `https://shazam.p.rapidapi.com/search/?term=${searchTerm}`,
    }),
    getArtistRelated: builder.query({
      query: ({ id }) => `https://shazam.p.rapidapi.com/artists/get-top-songs?id=${id}`
    })
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetCountryTracksQuery,
  useGetSearchedTracksQuery,
  useGetArtistRelatedQuery
} = shazamCoreApi;
