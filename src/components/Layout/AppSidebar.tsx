import { routesConfig } from '@/pages/routesConfig';
import classNames from '@/core/utils/classNames';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AppSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

const AppSidebar = ({ sidebarOpen, setSidebarOpen }: AppSidebarProps) => {
  const location = useLocation();

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='fixed inset-0 flex z-40 md:hidden' onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XMarkIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-shrink-0 flex items-center px-4 mb-5'>
                <img src='/LogoHemato.svg' alt='' srcSet='' />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-8'>
                  {routesConfig
                    .filter((item) => item.protected)
                    .map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={classNames(
                          location.pathname === item.path
                            ? 'bg-gray-100 text-red-600'
                            : 'text-gray-400 hover:bg-gray-100 hover:text-red-600',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                        )}
                      >
                        <item.icon
                          className={classNames(
                            location.pathname === item.path
                              ? 'text-red-600'
                              : 'text-gray-400 group-hover:text-red-600',
                            'mr-4 flex-shrink-0 h-6 w-6',
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'></div>
        </Dialog>
      </Transition.Root>
      <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
        <div className='flex-1 flex flex-col min-h-0 bg-white rounded-e-2xl'>
          <div className='flex items-center h-32 flex-shrink-0 px-4'>
            <img src='/LogoHemato.svg' alt='' srcSet='' />
          </div>
          <div className='flex-1 flex flex-col overflow-y-auto'>
            <nav className='flex-1 px-2 py-4 space-y-6'>
              {routesConfig
                .filter((item) => item.protected)
                .map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={classNames(
                      location.pathname === item.path
                        ? 'bg-gray-100 text-red-600'
                        : 'text-gray-400 hover:bg-gray-100 hover:text-red-600',
                      'group flex items-center px-5 py-5 text-sm font-medium rounded-md',
                    )}
                  >
                    <item.icon
                      className={classNames(
                        location.pathname === item.path
                          ? 'text-red-600'
                          : 'text-gray-400 group-hover:text-red-600',
                        'mr-3 flex-shrink-0 h-6 w-6',
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
