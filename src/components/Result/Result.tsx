import { TrashIcon } from '@heroicons/react/24/outline';

interface ResultProps {
  removeSmear: (blade: string) => void;
  blade: string;
  createdAt: string;
  children?: React.ReactNode;
}

export const Result: React.FC<ResultProps> = ({ createdAt, removeSmear, blade, children }) => {
  return (
    <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mt-8 space-y-6'>
      <header className='flex justify-between'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Lâmina {blade}</h3>

        <button onClick={() => removeSmear(blade)} className='text-red-500'>
          <TrashIcon className='h-6 w-6' />
        </button>
      </header>
      <main className='mt-2 sm:flex sm:justify-between'>{children}</main>
      <footer className='flex justify-end'>
        <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800'>
          {createdAt}
        </span>
      </footer>
    </div>
  );
};
