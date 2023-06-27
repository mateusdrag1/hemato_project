import { Card } from '@/components/Card';
import AppContainer from '@/components/Layout/AppContainer';

import { useGetPatientsQuery } from '@/features/patients/patientSlice';

import {
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const Dashboard: React.FC = () => {
  const { data } = useGetPatientsQuery();

  const patientsWithSmear = data?.patients.filter((patient) => patient.leukocyte.length > 0) || [];
  const patientsWithRBC = data?.patients.filter((patient) => patient.erythrocyte.length > 0) || [];

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
        <Card Icon={UserIcon} qtd={data?.patients.length ?? 0} title='Pacientes' color='blue' />
        <Card
          Icon={DocumentDuplicateIcon}
          qtd={patientsWithRBC.length}
          title='Séries Eritrocitárias'
          color='red'
        />
        <Card
          Icon={ClipboardDocumentCheckIcon}
          qtd={patientsWithSmear.length}
          title='Séries Leucocitárias'
          color='green'
        />
      </header>
    </AppContainer>
  );
};
