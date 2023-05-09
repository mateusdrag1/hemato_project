import {
  analyzeWBC,
  reviewEosino,
  reviewLymphocytes,
  reviewMonocytes,
  reviewNeutrophils,
} from '@/utils/calculos';

import { FC } from 'react';
import { Result } from '../Result/Result';

interface ResultWBC {
  removeSmear: (smear_id: string) => void;
  laminaID: string;
  segmentados: number;
  eosinofilos: number;
  bastonetes: number;
  linfocitos: number;
  monocitos: number;
  data: string;
}

export const ResultWBC: FC<ResultWBC> = ({
  laminaID,
  bastonetes,
  data,
  eosinofilos,
  linfocitos,
  monocitos,
  segmentados,
  removeSmear,
}) => {
  return (
    <Result removeSmear={removeSmear} created_at={data} smear_id={laminaID}>
      <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
        <div className='my-2'>
          Segmentados:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {segmentados} - {reviewNeutrophils(segmentados)}
          </span>
        </div>
        <div className='my-2'>
          Eosinófilos:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {eosinofilos} - {reviewEosino(eosinofilos)}
          </span>
        </div>
        <div className='my-2'>
          Bastonetes: <span className='ml-1 font-medium text-gray-900'>{bastonetes}</span>
        </div>
        <div className='my-2'>
          Linfócitos:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {linfocitos} - {reviewLymphocytes(linfocitos)}
          </span>
        </div>
        <div className='my-2'>
          Monócitos:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {monocitos} - {reviewMonocytes(monocitos)}
          </span>
        </div>
        <div className='ml-1 font-bold text-red-900'>
          {analyzeWBC({
            segmentados,
            eosinofilos,
            bastonetes,
            linfocitos,
            monocitos,
          })}
        </div>
      </div>
    </Result>
  );
};
