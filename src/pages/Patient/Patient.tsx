import AppContainer from '@/components/Layout/AppContainer';
import { PatientCard } from '@/components/PatientCard';
import { PatientForm } from '@/components/PatientForm';
import { CreatePatientFormData } from '@/components/PatientForm/validate';

import {
  useCreatePatientMutation,
  useDeletePatientMutation,
  useGetPatientsQuery,
} from '@/features/patients/patientSlice';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

export const Patients: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isFetching } = useGetPatientsQuery();
  const [deletePatient, deletePatientStatus] = useDeletePatientMutation();
  const [createPatient, createPatientStatus] = useCreatePatientMutation();

  const handleSubmit = async (data: CreatePatientFormData) => {
    await createPatient(data);
  };

  const removeSmear = async (id: string) => {
    await deletePatient({
      id,
    });
  };

  useEffect(() => {
    if (deletePatientStatus.isSuccess) {
      enqueueSnackbar('Paciente removido com sucesso', {
        variant: 'success',
      });
    }

    if (deletePatientStatus.error) {
      enqueueSnackbar('Erro ao remover paciente', {
        variant: 'error',
      });
    }
  }, [deletePatientStatus, enqueueSnackbar]);

  useEffect(() => {
    if (createPatientStatus.isSuccess) {
      enqueueSnackbar('Paciente criado com sucesso', {
        variant: 'success',
      });
    }

    if (createPatientStatus.error) {
      enqueueSnackbar('Erro ao criar paciente', {
        variant: 'error',
      });
    }
  }, [createPatientStatus, enqueueSnackbar]);

  return (
    <AppContainer
      title='Cadastro de Pacientes
    '
    >
      <PatientForm onSubmit={handleSubmit} />
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <PatientCard data={data?.patients} isFetching={isFetching} handleRemove={removeSmear} />
      </div>
    </AppContainer>
  );
};
