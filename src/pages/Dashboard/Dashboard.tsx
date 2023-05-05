import AppContainer from '@/components/Layout/AppContainer';

export const Dashboard: React.FC = () => {
  const patients = localStorage.getItem('patients')
    ? JSON.parse(localStorage.getItem('patients') as string)?.length
    : 0;

  const bloodSmear = localStorage.getItem('bloodSmear')
    ? JSON.parse(localStorage.getItem('bloodSmear') as string)?.length
    : 0;

  const exams = localStorage.getItem('exams')
    ? JSON.parse(localStorage.getItem('exams') as string)?.length
    : 0;

  return (
    <AppContainer title='Dashboard'>
      <header className='md:grid md:grid-cols-3 md:gap-6'>
        <div className='shadow px-4 py-5 sm:rounded-lg sm:p-6 bg-blue-700 text-white flex flex-col gap-4'>
          <span>Total de pacientes</span>
          <span className='text-4xl font-bold'>{patients}</span>
        </div>
        <div className='shadow px-4 py-5 sm:rounded-lg sm:p-6 bg-green-700 text-white flex flex-col gap-4'>
          <span>Total de lâminas</span>
          <span className='text-4xl font-bold'>{bloodSmear}</span>
        </div>
        <div className='shadow px-4 py-5 sm:rounded-lg sm:p-6 bg-yellow-700 text-white flex flex-col gap-4'>
          <span>Total de exames</span>
          <span className='text-4xl font-bold'>{exams}</span>
        </div>
      </header>
    </AppContainer>
  );
};
