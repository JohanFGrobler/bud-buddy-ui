'use client'

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Grow = {
  id: string;
  name: string;
  notes: string;
  startDate: string | null;
  endDate: string | null;
  environment: string;
  growType: string;
  plants: Plant[];
  harvest: {
    date: string | null;
    notes: string;
    totalDryWeight: number;
    totalWetWeight: number;
  };
};

export type Plant = {
  id: string;
  name: string;
  strain: string;
  status: string;
  phenotype: string;
  genotype: string;
  notes: string;
  events: unknown[];
};

export const growApi = createApi({
  reducerPath: "grows",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getGrows: builder.query<Grow[], void>({
      query: () => "grows",
    }),
  }),
});

export const { useGetGrowsQuery } = growApi;