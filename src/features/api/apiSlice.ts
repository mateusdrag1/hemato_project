import { clearLocalStorage } from '@/core/helpers/localStorage';
import { clearSession, getSessionItem } from '@/core/helpers/session';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${getSessionItem('@HP-Token')}`);
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    clearLocalStorage();
    clearSession();
    window.location.href = '/login';
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Patients', 'Cells', 'Categories'],
  baseQuery: baseQueryWithReauth,
  endpoints: (_builder) => ({}),
});
