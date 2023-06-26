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

      {/* <div className='space-y-6'>
        <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Série Plaquetária</h3>
              <p className='mt-1 text-sm text-gray-500'>
                Aqui você será capaz de cadastrar uma nova série plaquetária.
              </p>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <div className='space-y-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='id_patient' className='block text-sm font-medium text-gray-700'>
                      Paciente
                    </label>
                    <input
                      type='text'
                      name='id_patient'
                      id='id_patient'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='platelets' className='block text-sm font-medium text-gray-700'>
                      Plaquetas descritas
                    </label>
                    <input
                      type='text'
                      name='platelets'
                      id='platelets'
                      className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <button
            type='button'
            onClick={() => {
              console.log('Limpar campos');
            }}
            className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Limpar campos
          </button>
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Armazenar plaquetas
          </button>
        </div>

        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <h1>Plaquetas A</h1>
          <h1>Plaquetas A</h1>
          <h1>Plaquetas A</h1>
          <h1>Plaquetas A</h1>
        </div>
      </div> */}
    </AppContainer>
  );
};
