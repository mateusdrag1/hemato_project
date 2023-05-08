import { PlateletsPatients } from '@/pages/Platelet';
import { Result } from '../Result/Result';

export const ResultPlatelet: React.FC<{
  plateletsPatients: PlateletsPatients;
  removePatient: (id: string) => void;
}> = ({ plateletsPatients, removePatient }) => {
  const plateletsResult = () => {
    if (plateletsPatients.platelets < 150000) {
      return 'Trombocitopenia';
    } else if (plateletsPatients.platelets > 450000) {
      return 'Trombocitose';
    } else {
      return 'Normal';
    }
  };

  return (
    <Result
      created_at={plateletsPatients.created_at}
      smear_id={plateletsPatients.smear_id}
      removeSmear={removePatient}
    >
      <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
        <div className='my-2'>
          Plaquetas:{' '}
          <span className='ml-1 font-medium text-gray-900'>{plateletsPatients.platelets}</span>
        </div>
        <span className='font-medium text-gray-900'>{plateletsResult()} - </span>
      </div>
    </Result>
  );
};
