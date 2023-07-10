import AppContainer from '@/components/Layout/AppContainer';

import { SmearForm } from '@/components/SmearForm';
import { CreateSmearFormData } from '@/components/SmearForm/validate';
import { WBCCard } from '@/components/WBCCard/WBCCard';

import { useAddLeukocyteMutation, useGetPatientsQuery } from '@/features/patients/patientSlice';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';

export interface BloodSmear extends CreateSmearFormData {
  createdAt: string;
}

const WBC: React.FC = () => {
  const { data, isFetching } = useGetPatientsQuery();
  const [addLeukocyte, addLeukocyteStatus] = useAddLeukocyteMutation();

  const handleSubmit = async (data: CreateSmearFormData) => {
    const { bandNeutrophils, basophils, eosinophils, lymphocytes, monocytes, neutrophils } = data;

    if (bandNeutrophils + basophils + eosinophils + lymphocytes + monocytes + neutrophils !== 100) {
      enqueueSnackbar('A soma da contagem diferencial deve ser igual a 100', {
        variant: 'error',
      });
      return;
    }

    await addLeukocyte(data);
  };

  useEffect(() => {
    if (addLeukocyteStatus.isSuccess) {
      enqueueSnackbar('Série Leucocitária adicionada com sucesso', {
        variant: 'success',
      });
    }

    if (addLeukocyteStatus.error) {
      enqueueSnackbar('Erro ao adicionar Série Leucocitária', {
        variant: 'error',
      });
    }
  }, [addLeukocyteStatus]);

  return (
    <AppContainer title='Série Leucocitária'>
      <SmearForm onSubmit={handleSubmit} patients={data?.patients || []} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        <WBCCard data={data?.patients} isFetching={isFetching} />
      </div>
    </AppContainer>
  );
};

export { WBC };
