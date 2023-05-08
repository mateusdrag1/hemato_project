import AppContainer from '@/components/Layout/AppContainer';
import { RBCForm } from '@/components/RBCForm';
import { CreateRBCFormData } from '@/components/RBCForm/validate';
import { ResultRBC } from '@/components/ResultRBC';

import { useState } from 'react';

export interface Patient extends CreateRBCFormData {
  created_at: string;
}

export const RBC = () => {
  const [patients, setPatients] = useState<Patient[]>(
    localStorage.getItem('patients') ? JSON.parse(localStorage.getItem('patients') as string) : [],
  );

  const handleSubmit = (data: CreateRBCFormData) => {
    const patientWithDate: Patient = {
      ...data,
      created_at: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    };

    if (patients.filter((patient) => patient.smear_id === patientWithDate.smear_id).length > 0) {
      alert('Já existe um paciente com esse ID');
      return;
    }

    setPatients((old) => [...old, patientWithDate]);

    localStorage.setItem('patients', JSON.stringify([...patients, patientWithDate]));
  };

  const removeSmear = (smear_id: string) => {
    const newPatients = patients.filter((patient) => patient.smear_id !== smear_id);

    setPatients(newPatients);

    localStorage.setItem('patients', JSON.stringify(newPatients));
  };

  return (
    <AppContainer title='Série Eritrocitária'>
      <RBCForm onSubmit={handleSubmit} />

      <div className='md:grid md:grid-cols-3 md:gap-6'>
        {patients.length > 0 &&
          patients.map((patient) => (
            <ResultRBC key={patient.smear_id} patient={patient} removeSmear={removeSmear} />
          ))}
      </div>
    </AppContainer>
  );
};
