import AppContainer from '@/components/Layout/AppContainer';
import { PlateletForm } from '@/components/PlateletForm';
import { CreatePlateletFormData } from '@/components/PlateletForm/validate';
import { ResultPlatelet } from '@/components/ResultPlatelet';
import { useState } from 'react';

export interface PlateletsPatients extends CreatePlateletFormData {
  createdAt: string;
}

export const Platelet: React.FC = () => {
  const [plateletsPatients, setPlateletsPatients] = useState<PlateletsPatients[]>(
    localStorage.getItem('plateletsPatients')
      ? JSON.parse(localStorage.getItem('plateletsPatients') as string)
      : [],
  );

  const handleSubmit = (data: CreatePlateletFormData) => {
    const patientWithDate: PlateletsPatients = {
      ...data,
      createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    };

    if (plateletsPatients.filter((patient) => patient.blade === patientWithDate.blade).length > 0) {
      alert('Já existe um paciente com esse ID');
      return;
    }

    setPlateletsPatients((old) => [...old, patientWithDate]);

    localStorage.setItem(
      'plateletsPatients',
      JSON.stringify([...plateletsPatients, patientWithDate]),
    );
  };

  const remove = (id: string) => {
    setPlateletsPatients((old) => old.filter((patient) => patient.blade !== id));
    localStorage.setItem(
      'plateletsPatients',
      JSON.stringify(plateletsPatients.filter((patient) => patient.blade !== id)),
    );
  };

  return (
    <AppContainer title='Série Plaquetária'>
      <PlateletForm onSubmit={handleSubmit} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {plateletsPatients.length > 0 &&
          plateletsPatients.map((patient) => (
            <ResultPlatelet
              key={patient.blade}
              plateletsPatients={patient}
              removePatient={remove}
            />
          ))}
      </div>
    </AppContainer>
  );
};
