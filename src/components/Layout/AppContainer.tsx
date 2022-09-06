import Title from './Title';

interface AppContainerProps {
  title: string;
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ title, children }) => {
  return (
    <>
      <main className='flex-1'>
        <div className='py-6'>
          <Title title={title} />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
            <div className='py-6'>{children}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppContainer;
