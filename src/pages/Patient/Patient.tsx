import AppContainer from '@/components/Layout/AppContainer';
import { PatientForm } from '@/components/PatientForm';
import { CreatePatientFormData } from '@/components/PatientForm/validate';
import { Result } from '@/components/Result';

import { useLoadPatients } from '@/core/hooks/useLoadPatients';

export const Patients: React.FC = () => {
  const { dataPatients, createPatient, removePatient } = useLoadPatients();

  const handleSubmit = async (data: CreatePatientFormData) => {
    createPatient(data);
  };

  const removeSmear = (id: number) => {
    removePatient(id);
  };

  return (
    <AppContainer
      title='Cadastro de Pacientes
    '
    >
      <PatientForm onSubmit={handleSubmit} />
      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {dataPatients.length > 0 &&
          dataPatients.map((patient) => (
            <Result
              key={`${patient.blade}-${patient.created_at}`}
              removeSmear={() => removeSmear(patient.id)}
              blade={patient.blade}
              createdAt={patient.created_at}
            >
              <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
                <div className='my-2'>
                  Idade: <span className='ml-1 font-medium text-gray-900'>{patient.age}</span>
                </div>
                <div className='my-2'>
                  Sexo:{' '}
                  <span className='ml-1 font-medium text-gray-900'>
                    {patient.genre === 'M' ? 'Masculino' : 'Feminino'}
                  </span>
                </div>
              </div>
            </Result>
          ))}
      </div>
    </AppContainer>
  );
};
