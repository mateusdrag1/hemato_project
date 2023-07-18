import { ICellCategory } from '@/core/interfaces/cells.interface';
import { apiSlice } from '../api/apiSlice';

const endpoint = '/categories';

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getCategories: query<
      {
        categories: ICellCategory[];
      },
      void
    >({
      query: () => endpoint,
      providesTags: ['Categories'],
    }),
    getCategory: query<ICellCategory, number>({
      query: (id) => `${endpoint}/${id}`,
    }),
    createCategory: mutation<ICellCategory, Partial<ICellCategory>>({
      query: (body) => ({
        url: endpoint,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Categories'],
    }),
    deleteCategory: mutation<ICellCategory, Partial<ICellCategory>>({
      query: (body) => ({
        url: `${endpoint}/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Categories'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} = categoriesApiSlice;
