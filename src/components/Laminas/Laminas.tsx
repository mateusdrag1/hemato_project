import {
  analyzeWBC,
  reviewEosino,
  reviewLymphocytes,
  reviewMonocytes,
  reviewNeutrophils,
} from '@/utils/calculos';
import { TrashIcon } from '@heroicons/react/outline';
import { FC } from 'react';

interface LaminasProps {
  removeSmear: (smear_id: string) => void;
  laminaID: string;
  segmentados: number;
  eosinofilos: number;
  bastonetes: number;
  linfocitos: number;
  monocitos: number;
  data: string;
}

export const Laminas: FC<LaminasProps> = ({
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
    <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mt-8'>
      <div className='flex justify-between'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Lâmina {laminaID}</h3>

        <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800'>
          {data}
        </span>

        <button onClick={() => removeSmear(laminaID)} className='text-red-500'>
          <TrashIcon className='h-6 w-6' />
        </button>
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
