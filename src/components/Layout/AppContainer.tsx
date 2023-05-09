import { AppFooter } from './AppFooter';
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
          <div className='max-w-7xl mx-auto px-4'>
            <Title title={title} />
            <div className='py-6'>{children}</div>
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
};

export default AppContainer;
