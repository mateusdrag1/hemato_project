import {
  analyzeWBC,
  reviewEosino,
  reviewLymphocytes,
  reviewMonocytes,
  reviewNeutrophils,
} from '@/utils/calculos';
import { FC } from 'react';

interface LaminasProps {
  sequence: number;
  laminaID: string;
  segmentados: number;
  eosinofilos: number;
  bastonetes: number;
  linfocitos: number;
  monocitos: number;
  data: string;
}

export const Laminas: FC<LaminasProps> = ({
  sequence,
  laminaID,
  bastonetes,
  data,
  eosinofilos,
  linfocitos,
  monocitos,
  segmentados,
}) => {
  return (
    <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mt-8'>
      <div className='flex justify-between'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Lâmina {sequence}</h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>ID: {laminaID}</p>
        <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800'>
          {data}
        </span>
      </div>
      <div className='mt-2 sm:flex sm:justify-between'>
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
      </div>
    </div>
  );
};
