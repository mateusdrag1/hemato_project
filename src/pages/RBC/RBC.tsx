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
    const patientWithDate = {
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

      {/* {pacient && (
        <div className='mt-5 md:mt-0 md:col-span-2 py-6'>
          <div className='px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>Resultado</h3>
            <p className='mt-1 text-sm text-gray-500'>
              Os resultados foram calculados com sucesso.
            </p>
            <div className='mt-5'>
              <dl className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>Nome do paciente</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{pacient.nome}</dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>Idade do paciente</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{pacient.idade}</dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>Sexo do paciente</dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {pacient.sexo === 'M' ? 'Masculino' : 'Feminino'}
                  </dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    Hemacias (milhões/µL)
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {pacient.hemacias} milhões/µL - {''}
                    {pacient.sexo === 'M' && pacient.hemacias < 4.5 && (
                      <span className='text-red-500'>Eritrocitopenia</span>
                    )}
                    {pacient.sexo === 'F' && pacient.hemacias < 4.0 && (
                      <span className='text-red-500'>Eritrocitopenia</span>
                    )}
                    {pacient.sexo === 'M' && pacient.hemacias >= 6.2 && (
                      <span className='text-red-500'>Eritrocitose</span>
                    )}
                    {pacient.sexo === 'F' && pacient.hemacias >= 5.5 && (
                      <span className='text-red-500'>Eritrocitose</span>
                    )}
                    {pacient.sexo === 'M' && pacient.hemacias >= 4.5 && pacient.hemacias < 6.2 && (
                      <span className='text-green-500'>Normal</span>
                    )}
                    {pacient.sexo === 'F' && pacient.hemacias >= 4.0 && pacient.hemacias < 5.5 && (
                      <span className='text-green-500'>Normal</span>
                    )}
                  </dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>Hemoglobina (g/dL)</dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {pacient.hemoglobina} g/dL - {''}
                    {pacient.hemoglobina < 13 ? (
                      <span className='text-red-500'>Anemia</span>
                    ) : (
                      <span className='text-green-500'>Não anêmico</span>
                    )}
                  </dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>Hematocrito</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{pacient.hematocrito}</dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>RDW (%)</dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {pacient.rdw}% -{' '}
                    {pacient.rdw > 14.5 ? (
                      <span className='text-red-500'>Anisocitose</span>
                    ) : (
                      <span className='text-green-500'>Normal</span>
                    )}
                  </dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    HCM (Hemoglobina Corpuscular Média)
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {HCM(pacient.hemoglobina, pacient.hemacias).toFixed(2)} pg -{' '}
                    {HCM(pacient.hemoglobina, pacient.hemacias) < 27 ? (
                      <span className='text-red-500'>Hipocromia</span>
                    ) : (
                      <span className='text-green-500'>Normal</span>
                    )}
                  </dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    CHCM (Concentração de Hemoglobina Corpuscular Média)
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {CHCM(pacient.hemoglobina, pacient.hematocrito).toFixed(2)} % ou g/dL
                  </dd>
                </div>
                <div className='px-4 py-5 bg-white shadow sm:rounded-lg sm:p-6'>
                  <dt className='text-sm font-medium text-gray-500 truncate'>
                    VCM (Volume Corpuscular Médio ) (fL)
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900'>
                    {VCM(pacient.hematocrito, pacient.hemacias).toFixed(2)} fL -{' '}
                    {VCM(pacient.hematocrito, pacient.hemacias) < 80 ? (
                      <span className='text-red-500'>Microcitose</span>
                    ) : VCM(pacient.hematocrito, pacient.hemacias) > 100 ? (
                      <span className='text-red-500'>Macrocitose</span>
                    ) : (
                      <span className='text-green-500'>Normal</span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )} */}
    </AppContainer>
  );
};
