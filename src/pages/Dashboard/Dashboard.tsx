import { Card } from '@/components/Card';
import AppContainer from '@/components/Layout/AppContainer';
import { api } from '@/configs';
import {
  UserIcon,
  // ClipboardDocumentCheckIcon,
  // DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export const Dashboard: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    document.title = 'Hematopedia | Dashboard';

    const getPatients = async () => {
      const response = await api.get('/pacients');
      setPatients(response.data.patients);
    };

    getPatients();
  }, []);

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
        <Card Icon={UserIcon} qtd={patients.length} title='Pacientes' color='blue' />
        {/* <Card Icon={DocumentDuplicateIcon} qtd={bloodSmear.length} title='Lâminas' color='red' />
        <Card Icon={ClipboardDocumentCheckIcon} qtd={exams.length} title='Exames' color='green' /> */}
      </header>
    </AppContainer>
  );
};
