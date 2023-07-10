import { IPatient } from '@/core/interfaces/patients.interface';
import { Result } from '../Result';
import { plateletsResult, plateletsDescription } from './RatePlatelet';

type PlateletCardProps = {
  data?: IPatient[];
  isFetching?: boolean;
  hasError?: boolean;
};

export const PlateletCard: React.FC<PlateletCardProps> = ({ data, isFetching, hasError }) => {
  if (isFetching) return <div>Carregando...</div>;

  if (hasError) return <div>Erro ao carregar as série branca</div>;

  if (!data) return null;

  if (data.length === 0) return <div>Nenhuma série branca cadastrada</div>;

  return (
    <>
      {data.map((patient) => {
        const lastResult = patient.platelets[patient.platelets.length - 1];

        if (!lastResult) return <></>;

        return (
          <Result createdAt={patient.created_at} blade={patient.blade} key={patient.blade}>
            <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
              <div className='my-2'>
                Plaquetas:{' '}
                <span className='ml-1 font-medium text-gray-900'>{lastResult.platelets}</span>
              </div>
              <span className='font-medium text-gray-900'>
                {plateletsResult(lastResult.platelets)} -
                {plateletsDescription(lastResult.platelets)}
              </span>
            </div>
          </Result>
        );
      })}
    </>
  );
};
