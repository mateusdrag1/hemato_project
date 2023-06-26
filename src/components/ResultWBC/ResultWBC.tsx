import {
  analyzeWBC,
  reviewEosino,
  reviewLeukocytes,
  reviewLymphocytes,
  reviewMonocytes,
  reviewNeutrophils,
} from '@/core/utils/calculos';

import { FC } from 'react';
import { Result } from '../Result/Result';
import { IPatient } from '@/core/interfaces/patients.interface';

interface ResultWBC {
  pacient: IPatient;
}

export const ResultWBC: FC<ResultWBC> = ({ pacient }) => {
  const lastResult = pacient.leukocyte[pacient.leukocyte.length - 1];

  if (!lastResult) return <></>;

  return (
    <Result createdAt={pacient.createdAt} blade={pacient.blade}>
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
};
