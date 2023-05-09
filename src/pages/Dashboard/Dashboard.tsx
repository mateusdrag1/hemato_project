import { Card } from '@/components/Card';
import AppContainer from '@/components/Layout/AppContainer';
import {
  UserIcon,
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

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
      <div className='shadow px-4 py-5 sm:rounded-lg sm:p-6 bg-gradient-to-r from-red-400 to-red-700 flex flex-col gap-5 mb-5'>
        <div className='text-base text-white flex items-center gap-1'>
          <span className='text-white font-semibold'> Bem vindo ao Hematopedia,</span>
        </div>
        <span className='text-sm text-white'>
          Tenha um bom dia e não se esqueça de cuidar da sua saúde e de seus pacientes!
        </span>
      </div>
      <header className='md:grid md:grid-cols-3 gap-6 space-y-5 md:space-y-0'>
        <Card Icon={UserIcon} qtd={patients} title='Pacientes' color='blue' />
        <Card Icon={DocumentDuplicateIcon} qtd={bloodSmear} title='Lâminas' color='red' />
        <Card Icon={ClipboardDocumentCheckIcon} qtd={exams} title='Exames' color='green' />
      </header>
    </AppContainer>
  );
};
