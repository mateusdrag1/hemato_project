import { ICell } from '@/core/interfaces/cells.interface';
import { apiSlice } from '../api/apiSlice';

const endpoint = '/cells';

export const cellsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getCells: query<
      {
        cells: ICell[];
      },
      void
    >({
      query: () => endpoint,
      providesTags: ['Cells'],
    }),
    getCell: query<ICell, number>({
      query: (id) => `${endpoint}/${id}`,
    }),
    createCell: mutation<ICell, Partial<ICell>>({
      query: (body) => ({
        url: endpoint,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cells'],
    }),
    deleteCell: mutation<ICell, Partial<ICell>>({
      query: (body) => ({
        url: `${endpoint}/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Cells'],
    }),
  }),
});

export const { useGetCellsQuery, useCreateCellMutation, useDeleteCellMutation, useGetCellQuery } =
  cellsApiSlice;
