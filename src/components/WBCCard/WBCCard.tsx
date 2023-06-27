import { IPatient } from '@/core/interfaces/patients.interface';
import { Result } from '../Result';
import {
  reviewLeukocytes,
  reviewNeutrophils,
  reviewEosino,
  reviewLymphocytes,
  reviewMonocytes,
  analyzeWBC,
} from '@/core/utils/calculos';

type WBCCardProps = {
  data?: IPatient[];
  isFetching?: boolean;
  hasError?: boolean;
};

export const WBCCard: React.FC<WBCCardProps> = ({ data, isFetching, hasError }) => {
  if (isFetching) return <div>Carregando...</div>;

  if (hasError) return <div>Erro ao carregar as série branca</div>;

  if (!data) return null;

  if (data.length === 0) return <div>Nenhuma série branca cadastrada</div>;

  return (
    <>
      {data.map((patient) => {
        const lastResult = patient.leukocyte[patient.leukocyte.length - 1];

        if (!lastResult) return <></>;

        return (
          <Result key={patient.blade} createdAt={patient.createdAt} blade={patient.blade}>
            <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
              <div className='my-2'>
                Leucócitos:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {lastResult.leukocyte} - {reviewLeukocytes(lastResult.leukocyte)}
                </span>
              </div>
              <div className='my-2'>
                Segmentados:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {lastResult.neutrophils} - {reviewNeutrophils(lastResult.neutrophils)}
                </span>
              </div>
              <div className='my-2'>
                Eosinófilos:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {lastResult.eosinophils} - {reviewEosino(lastResult.eosinophils)}
                </span>
              </div>
              <div className='my-2'>
                Basófilos:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {lastResult.basophils} - {reviewEosino(lastResult.basophils)}
                </span>
              </div>
              <div className='my-2'>
                Bastonetes:{' '}
                <span className='ml-1 font-medium text-gray-900'>{lastResult.bandNeutrophils}</span>
              </div>
              <div className='my-2'>
                Linfócitos:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {lastResult.lymphocytes} - {reviewLymphocytes(lastResult.lymphocytes)}
                </span>
              </div>
              <div className='my-2'>
                Monócitos:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {lastResult.monocytes} - {reviewMonocytes(lastResult.monocytes)}
                </span>
              </div>
              <div className='ml-1 font-bold text-red-900'>
                {analyzeWBC({
                  segmentados: lastResult.neutrophils,
                  eosinofilos: lastResult.eosinophils,
                  bastonetes: lastResult.bandNeutrophils,
                  linfocitos: lastResult.lymphocytes,
                  monocitos: lastResult.monocytes,
                })}
              </div>
            </div>
          </Result>
        );
      })}
    </>
  );
};
