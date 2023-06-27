import { getSessionItem } from '@/core/helpers/session';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Patients'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${getSessionItem('@HP-Token')}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
