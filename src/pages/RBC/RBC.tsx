import AppContainer from '@/components/Layout/AppContainer';
import { RBCForm } from '@/components/RBCForm';
import { CreateRBCFormData } from '@/components/RBCForm/validate';
import { ResultRBC } from '@/components/ResultRBC';
import { useLoadPatients } from '@/core/hooks/useLoadPatients';

export const RBC = () => {
  const { dataPatients, addErythrocyte } = useLoadPatients();

  const handleSubmit = (data: CreateRBCFormData) => {
    addErythrocyte(data.blade, data);
  };

  return (
    <AppContainer title='Série Eritrocitária'>
      <RBCForm onSubmit={handleSubmit} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {dataPatients.length > 0 &&
          dataPatients.map((patient) => <ResultRBC key={patient.blade} patient={patient} />)}
      </div>
    </AppContainer>
  );
};
