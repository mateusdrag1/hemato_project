import { PlateletForm } from '@/components/PlateletForm';
import { CreatePlateletFormData } from '@/components/PlateletForm/validate';
import { ResultPlatelet } from '@/components/ResultPlatelet';

import AppContainer from '@/components/Layout/AppContainer';
import { useLoadPatients } from '@/core/hooks/useLoadPatients';

export interface PlateletsPatients extends CreatePlateletFormData {
  createdAt: string;
}

export const Platelet: React.FC = () => {
  const { dataPatients, addPlatelets } = useLoadPatients();

  const handleSubmit = (data: CreatePlateletFormData) => {
    addPlatelets(data.blade, data);
  };

  return (
    <AppContainer title='Série Plaquetária'>
      <PlateletForm onSubmit={handleSubmit} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {dataPatients.length > 0 &&
          dataPatients.map((patient) => <ResultPlatelet key={patient.blade} pacient={patient} />)}
      </div>
    </AppContainer>
  );
};
