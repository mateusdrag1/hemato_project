import { IPatient } from '@/core/interfaces/patients.interface';
import { RootState } from '@/core/store';
import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import { CreateRBCFormData } from '@/components/RBCForm/validate';
import { CreateSmearFormData } from '@/components/SmearForm/validate';
import { CreatePlateletFormData } from '@/components/PlateletForm/validate';

export const patient: IPatient = {
  id: '0',
  blade: '0000000000001',
  age: 1,
  genre: 'M',
  erythrocyte: [],
  leukocyte: [],
  platelets: [],
  created_at: '2023-06-26T17:24:41.309Z',
  updated_at: '2023-06-26T17:24:41.309Z',
};

const endpoint = '/patients';

export const patientsApiSlice = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getPatients: query<
      {
        patients: IPatient[];
      },
      void
    >({
      query: () => endpoint,
      providesTags: ['Patients'],
    }),
    getPatient: query<IPatient, number>({
      query: (id) => `${endpoint}/${id}`,
    }),
    createPatient: mutation<IPatient, Partial<IPatient>>({
      query: (body) => ({
        url: endpoint,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Patients'],
    }),
    deletePatient: mutation<IPatient, Partial<IPatient>>({
      query: (body) => ({
        url: `${endpoint}/${body.id}`,
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Patients'],
    }),
    addErythrocyte: mutation<CreateRBCFormData, Partial<CreateRBCFormData>>({
      query: (body) => ({
        url: `${endpoint}/${body.blade}/erythrocytes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Patients'],
    }),
    addLeukocyte: mutation<CreateSmearFormData, Partial<CreateSmearFormData>>({
      query: (body) => ({
        url: `${endpoint}/${body.blade}/leukocytes`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Patients'],
    }),
    addPlatelet: mutation<CreatePlateletFormData, Partial<CreatePlateletFormData>>({
      query: (body) => ({
        url: `${endpoint}/${body.blade}/platelets`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Patients'],
    }),
  }),
});

export const initialState = [
  patient,
  { ...patient, id: 1, blade: '0000000000002' },
  { ...patient, id: 2, blade: '0000000000003' },
  { ...patient, id: 3, blade: '0000000000004' },
];

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    createPatient: (state, action) => {
      state.push(action.payload);
    },
    updatePatient: (state, action) => {
      const index = state.findIndex((patient) => patient.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deletePatient: (state, action) => {
      const index = state.findIndex((patient) => {
        return patient.id === action.payload.id;
      });

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const selectPatients = (state: RootState) => state.patients;

export default patientSlice.reducer;
export const { createPatient, updatePatient, deletePatient } = patientSlice.actions;
export const {
  useGetPatientsQuery,
  useGetPatientQuery,
  useCreatePatientMutation,
  useDeletePatientMutation,
  useAddErythrocyteMutation,
  useAddLeukocyteMutation,
  useAddPlateletMutation,
} = patientsApiSlice;
