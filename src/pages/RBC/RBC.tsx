import AppContainer from '@/components/Layout/AppContainer';
import { RBCForm } from '@/components/RBCForm';
import { CreateRBCFormData } from '@/components/RBCForm/validate';
import { ResultRBC } from '@/components/ResultRBC';

import { useState } from 'react';
import { Patient } from '../Patient';

export const RBC = () => {
  const [patients, setPatients] = useState<Patient[]>(
    localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients') as string) : [],
  );

  const handleSubmit = (data: CreateRBCFormData) => {
    const patientWithDate: Patient = {
      ...data,
      createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    };

    if (patients.filter((patient) => patient.blade === patientWithDate.blade).length > 0) {
      alert('Já existe um paciente com esse ID');
      return;
    }

    setPatients((old) => [...old, patientWithDate]);

    localStorage.setItem('patients', JSON.stringify([...patients, patientWithDate]));
  };

  const removeSmear = (blade: string) => {
    const newPatients = patients.filter((patient) => patient.blade !== blade);

    setPatients(newPatients);

    localStorage.setItem('patients', JSON.stringify(newPatients));
  };

  return (
    <AppContainer title='Série Eritrocitária'>
      <RBCForm onSubmit={handleSubmit} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {patients.length > 0 &&
          patients.map((patient) => (
            <ResultRBC key={patient.blade} patient={patient} removeSmear={removeSmear} />
          ))}
      </div>
    </AppContainer>
  );
};
