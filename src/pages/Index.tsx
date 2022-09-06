import AppContainer from '@/components/Layout/AppContainer';
import { CHCM, HCM, VCM } from '@/utils/calculos';
import { useState } from 'react';

interface Pacient {
  hemacias: number;
  hematocrito: number;
  hemoglobina: number;
  idade: number;
  nome: string;
  rdw: number;
  sexo: string;
}

const Index = () => {
  const [pacient, setPacient] = useState<Pacient | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      hemacias: parseFloat(e.currentTarget.hemacias.value),
      hematocrito: parseFloat(e.currentTarget.hematocrito.value),
      hemoglobina: parseFloat(e.currentTarget.hemoglobina.value),
      idade: parseInt(e.currentTarget.idade.value),
      nome: e.currentTarget.nome.value,
      rdw: parseFloat(e.currentTarget.rdw.value),
      sexo: e.currentTarget.sexo.value,
    };

    setPacient(data);
  };

  return (
    <AppContainer title='Série Eritrocitária'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='space-y-6'>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Paciente</h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Aqui você descreve o paciente e o motivo da consulta.
                </p>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div className='space-y-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='nome' className='block text-sm font-medium text-gray-700'>
                        Nome do Paciente
                      </label>
                      <input
                        type='text'
                        name='nome'
                        id='nome'
                        autoComplete='given-name'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='idade' className='block text-sm font-medium text-gray-700'>
                        Idade do paciente
                      </label>
                      <input
                        type='text'
                        name='idade'
                        id='idade'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='sexo' className='block text-sm font-medium text-gray-700'>
                        Sexo
                      </label>
                      <select
                        id='sexo'
                        name='sexo'
                        autoComplete='sexo'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      >
                        <option value={'M'}>Masculino</option>
                        <option value={'F'}>Feminino</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Informações sobre série vermelha
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  São campos de exame da série vermelha, que ao indivar, será feita uma análise.
                </p>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label htmlFor='hemacias' className='block text-sm font-medium text-gray-700'>
                        Hemácias
                      </label>
                      <input
                        type='text'
                        name='hemacias'
                        id='hemacias'
                        autoComplete='address-level2'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                      <label
                        htmlFor='hemoglobina'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Hemoglobina
                      </label>
                      <input
                        type='text'
                        name='hemoglobina'
                        id='hemoglobina'
                        autoComplete='address-level1'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                      <label
                        htmlFor='hematocrito'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Hematocrito
                      </label>
                      <input
                        type='text'
                        name='hematocrito'
                        id='hematocrito'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                      <label htmlFor='rdw' className='block text-sm font-medium text-gray-700'>
                        RDW
                      </label>
                      <input
                        type='text'
                        name='rdw'
                        id='rdw'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-end'>
            <a
              type='button'
              href='/'
              className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Cancelar
            </a>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Fazer os cálculos e gerar laudo
            </button>
          </div>
        </div>
      </form>

      {pacient && (
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
      )}
    </AppContainer>
  );
};

export default Index;
