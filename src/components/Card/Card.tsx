import classNames from '@/utils/classNames';
import { UserIcon } from '@heroicons/react/24/solid';

interface CardProps {
  qtd: number;
  title: string;
  Icon: typeof UserIcon;
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'indigo' | 'purple' | 'pink';
}

export const Card: React.FC<CardProps> = ({ qtd, title, Icon, color }) => {
  return (
    <div className='shadow rounded-lg bg-white flex p-8 items-center gap-5'>
      <div
        className={classNames(
          'px-4 py-4 text-white rounded-full',
          color === 'red' ? 'bg-red-500' : '',
          color === 'green' ? 'bg-green-500' : '',
          color === 'blue' ? 'bg-blue-500' : '',
        )}
      >
        <Icon className='h-6 w-6' />
      </div>
      <div className='flex flex-col justify-center items-start'>
        <span className='text-2xl font-bold text-gray-500'>{qtd}</span>
        <span className='text-sm text-gray-500'>{title}</span>
      </div>
    </div>
  );
};
