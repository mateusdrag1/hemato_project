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

  const plateletsDescription = () => {
    if (plateletsPatients.platelets < 150000) {
      return `A trombocitopenia, que é a redução nas plaquetas circulantes (abaixo
        de 150.000), surge na maioria das vezes de uma ou duas causas gerias. Formação deficiente
        de plaquetas (como em estados aplásticos, efeito de quimioterapia mielotóxica e por
        sensibilidade a droga), e uma destruição aumentada de plaquetas na circulação e no baço
        (originária geralmente de uma sensibilização auto- imune das plaquetas, tornando-as sujeitas
        a fagocitose por macrófagos).`;
    } else if (plateletsPatients.platelets > 450000) {
      return `A trombocitose, que é o aumento nas plaquetas circulantes (acima de 450.000), é denominado
      trombocitose, e correlaciona-se com formação de trombos intravasculares`;
    } else {
      return `A contagem normal de plaquetas é de 150.000 a 450.000 por mm3.`;
    }
  };

  return (
    <Result
      createdAt={plateletsPatients.createdAt}
      blade={plateletsPatients.blade}
      removeSmear={removePatient}
    >
      <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
        <div className='my-2'>
          Plaquetas:{' '}
          <span className='ml-1 font-medium text-gray-900'>{plateletsPatients.platelets}</span>
        </div>
        <span className='font-medium text-gray-900'>
          {plateletsResult()} - {plateletsDescription()}
        </span>
      </div>
    </Result>
  );
};
