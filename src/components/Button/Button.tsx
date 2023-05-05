import classNames from '@/utils/classNames';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
} & ComponentPropsWithoutRef<'button'>;

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        variant === 'primary'
          ? 'ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          : '',
        variant === 'secondary'
          ? 'bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          : '',
        variant === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : '',
      )}
      {...rest}
    />
  );
}
