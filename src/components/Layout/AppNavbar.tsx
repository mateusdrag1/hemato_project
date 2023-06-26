import classNames from '@/core/utils/classNames';
import { Menu, Transition } from '@headlessui/react';
import { Bars2Icon, BellIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { ProfileLinks } from '../constants/ProfileLinks';
import { useLocation } from 'react-router-dom';

interface AppNavbarProps {
  setSidebarOpen: (open: boolean) => void;
}

const AppNavbar = ({ setSidebarOpen }: AppNavbarProps) => {
  const location = useLocation();

  return (
    <div className='sticky md:static top-0 z-10 flex-shrink-0 flex h-16 bg-white md:bg-transparent'>
      <div className='hidden md:flex px-16 py-8'>
        <div className='flex items-center gap-3 text-sm font-light'>
          Páginas <span className='text-gray-400'>/</span>
          <span className='text-gray-500 first-letter:uppercase'>
            {location.pathname === '/' ? 'dashboard' : location.pathname.replace('/', '')}
          </span>
        </div>
      </div>
      <button
        type='button'
        className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <Bars2Icon className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='flex-1 px-4 flex justify-between'>
        <div className='flex-1 flex'></div>
        <div className='ml-4 flex items-center md:ml-6'>
          <button
            type='button'
            className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>

          <Menu as='div' className='ml-3 relative'>
            <div>
              <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Open user menu</span>

                <div className='relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
                  <span className='font-medium text-gray-600 dark:text-gray-300'>SN</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {ProfileLinks.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.path}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700',
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
