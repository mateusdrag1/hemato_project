import AppContainer from '@/components/Layout/AppContainer';
import { PlusIcon } from '@heroicons/react/outline';

export const Patients: React.FC = () => {
  return (
    <AppContainer title='pacientes'>
      <header className='flex justify-between'>
        <div>
          Pacientes cadastrados: <span>0</span>
        </div>
        <button className='p-2 bg-[#0260a8] text-white font-black rounded-md'>
          <PlusIcon className='h-6 w-6' />
        </button>
      </header>
      <main>
        <div className='flex flex-col gap-4'>
          <div className='bg-white shadow overflow-hidden sm:rounded-md'>
            <ul className='divide-y divide-gray-200'>
              <li>
                <a href='/' className='block hover:bg-gray-50'>
                  <div className='px-4 py-4 sm:px-6'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium text-indigo-600 truncate'>Jane Cooper</p>
                      <div className='ml-2 flex-shrink-0 flex'>
                        <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          Ativo
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </AppContainer>
  );
};
