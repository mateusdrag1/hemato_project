import AppContainer from '@/components/Layout/AppContainer';
import { ResultWBC } from '@/components/ResultWBC';
import { SmearForm } from '@/components/SmearForm';
import { CreateSmearFormData } from '@/components/SmearForm/validate';
import { useLoadPatients } from '@/core/hooks/useLoadPatients';

export interface BloodSmear extends CreateSmearFormData {
  createdAt: string;
}

const WBC: React.FC = () => {
  const { addLeukocytes, dataPatients } = useLoadPatients();

  const createSmear = (data: CreateSmearFormData) => {
    const { bandNeutrophils, basophil, eosinophil, lymphocyte, monocyte, neutrophil } = data;

    if (bandNeutrophils + basophil + eosinophil + lymphocyte + monocyte + neutrophil !== 100) {
      return;
    }

    addLeukocytes(data.blade, data);
  };

  return (
    <AppContainer title='Série Leucocitária'>
      <SmearForm onSubmit={createSmear} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {dataPatients.length > 0 &&
          dataPatients.map((pacient) => (
            <ResultWBC key={`${pacient.createdAt}${pacient.blade}`} pacient={pacient} />
          ))}
      </div>
    </AppContainer>
  );
};

export { WBC };
