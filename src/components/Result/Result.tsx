import { TrashIcon } from '@heroicons/react/24/outline';

interface ResultProps {
  removeSmear: (smear_id: string) => void;
  smear_id: string;
  created_at: string;
  children?: React.ReactNode;
}

export const Result: React.FC<ResultProps> = ({ created_at, removeSmear, smear_id, children }) => {
  return (
    <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 mt-8 space-y-6'>
      <header className='flex justify-between'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>Lâmina {smear_id}</h3>

        <button onClick={() => removeSmear(smear_id)} className='text-red-500'>
          <TrashIcon className='h-6 w-6' />
        </button>
      </header>
      <main className='mt-2 sm:flex sm:justify-between'>{children}</main>
      <footer className='flex justify-end'>
        <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800'>
          {created_at}
        </span>
      </footer>
    </div>
  );
};
