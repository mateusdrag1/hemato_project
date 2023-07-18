import { apiSlice } from '@/features/api/apiSlice';
import { categoriesApiSlice } from '@/features/categories/categorySlice';
import { cellsApiSlice } from '@/features/cells/cellSlice';
import patientSlice, { patientsApiSlice } from '@/features/patients/patientSlice';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    patients: patientSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [patientsApiSlice.reducerPath]: patientsApiSlice.reducer,
    [cellsApiSlice.reducerPath]: cellsApiSlice.reducer,
    [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
