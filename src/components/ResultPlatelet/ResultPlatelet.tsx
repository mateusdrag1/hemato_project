import { Result } from '../Result/Result';
import { IPatient } from '@/core/interfaces/patients.interface';

export const ResultPlatelet: React.FC<{
  pacient: IPatient;
}> = ({ pacient }) => {
  const lastPlatelets = pacient.platelets[pacient.platelets.length - 1];

  if (!lastPlatelets) {
    return <></>;
  }

  const plateletsResult = () => {
    if (lastPlatelets.platelets < 150000) {
      return 'Trombocitopenia';
    } else if (lastPlatelets.platelets > 450000) {
      return 'Trombocitose';
    } else {
      return 'Normal';
    }
  };

  const plateletsDescription = () => {
    if (lastPlatelets.platelets < 150000) {
      return `A trombocitopenia, que é a redução nas plaquetas circulantes (abaixo
        de 150.000), surge na maioria das vezes de uma ou duas causas gerias. Formação deficiente
        de plaquetas (como em estados aplásticos, efeito de quimioterapia mielotóxica e por
        sensibilidade a droga), e uma destruição aumentada de plaquetas na circulação e no baço
        (originária geralmente de uma sensibilização auto- imune das plaquetas, tornando-as sujeitas
        a fagocitose por macrófagos).`;
    } else if (lastPlatelets.platelets > 450000) {
      return `A trombocitose, que é o aumento nas plaquetas circulantes (acima de 450.000), é denominado
      trombocitose, e correlaciona-se com formação de trombos intravasculares`;
    } else {
      return `A contagem normal de plaquetas é de 150.000 a 450.000 por mm3.`;
    }
  };

  return (
    <Result createdAt={pacient.createdAt} blade={pacient.blade}>
      <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
        <div className='my-2'>
          Plaquetas:{' '}
          <span className='ml-1 font-medium text-gray-900'>{lastPlatelets.platelets}</span>
        </div>
        <span className='font-medium text-gray-900'>
          {plateletsResult()} - {plateletsDescription()}
        </span>
      </div>
    </Result>
  );
};
