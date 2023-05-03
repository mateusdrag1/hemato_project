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
        <div className='mt-2 flex flex-col items-end text-sm text-gray-500 sm:mt-0'>
          <div>
            Segmentados: <span className='ml-1 font-medium text-gray-900'>{segmentados}</span>
          </div>
          <div className='ml-2'>
            Eosinófilos: <span className='ml-1 font-medium text-gray-900'>{eosinofilos}</span>
          </div>
          <div className='ml-2'>
            Bastonetes: <span className='ml-1 font-medium text-gray-900'>{bastonetes}</span>
          </div>
          <div className='ml-2'>
            Linfócitos: <span className='ml-1 font-medium text-gray-900'>{linfocitos}</span>
          </div>
          <div className='ml-2'>
            Monócitos: <span className='ml-1 font-medium text-gray-900'>{monocitos}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
