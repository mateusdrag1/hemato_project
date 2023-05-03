import { Laminas } from '@/components/Laminas';
import AppContainer from '@/components/Layout/AppContainer';
import { FC, useEffect, useState } from 'react';

interface Laminario {
  laminaID: string;
  segmentados: number;
  eosinofilos: number;
  bastonetes: number;
  linfocitos: number;
  monocitos: number;
  data: string;
}

const Laminario: FC = () => {
  const [bloodSmear, setBloodSmear] = useState<Laminario[]>([]);

  const clearAllFields = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      input.value = '';
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (data.get('laminaID') === '') {
      alert('O ID da lâmina é obrigatório');
      return;
    }

    const lamina = {
      laminaID: data.get('laminaID') as string,
      segmentados: Number(data.get('segmentados')),
      eosinofilos: Number(data.get('eosinofilos')),
      bastonetes: Number(data.get('bastonetes')),
      linfocitos: Number(data.get('linfocitos')),
      monocitos: Number(data.get('monocitos')),
      data: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    };

    setBloodSmear((prev) => [...prev, lamina]);
  };

  useEffect(() => {
    if (bloodSmear.length > 0) {
      console.log(bloodSmear);
    }
  }, [bloodSmear]);

  return (
    <AppContainer title='Lâminas de pacientes'>
      <form onSubmit={onSubmit}>
        <div className='space-y-6'>
          <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Lâmina</h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Aqui você adiciona sua lâmina de paciente, com os dados da lâmina e imagens.
                </p>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-2'>
                <div className='space-y-6'>
                  <div className='grid grid-cols-8 gap-6'>
                    <div className='col-span-2 sm:col-span-2'>
                      <label htmlFor='laminaID' className='block text-sm font-medium text-gray-700'>
                        ID da Lâmina
                      </label>
                      <input
                        type='text'
                        name='laminaID'
                        id='laminaID'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-2 sm:col-span-2'>
                      <label
                        htmlFor='segmentados'
                        className='block text-sm font-medium text-gray-700'
                      >
                        QTD de Segmentados
                      </label>
                      <input
                        type='text'
                        name='segmentados'
                        id='segmentados'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-2 sm:col-span-2'>
                      <label
                        htmlFor='eosinofilos'
                        className='block text-sm font-medium text-gray-700'
                      >
                        QTD de Eosinófilos
                      </label>
                      <input
                        type='text'
                        name='eosinofilos'
                        id='eosinofilos'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-2 sm:col-span-2'>
                      <label
                        htmlFor='bastonetes'
                        className='block text-sm font-medium text-gray-700'
                      >
                        QTD de Bastonetes
                      </label>
                      <input
                        type='text'
                        name='bastonetes'
                        id='bastonetes'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-2 sm:col-span-2'>
                      <label
                        htmlFor='bastonetes'
                        className='block text-sm font-medium text-gray-700'
                      >
                        QTD de Bastonetes
                      </label>
                      <input
                        type='text'
                        name='bastonetes'
                        id='bastonetes'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-2 sm:col-span-2'>
                      <label
                        htmlFor='linfocitos'
                        className='block text-sm font-medium text-gray-700'
                      >
                        QTD de Linfócitos
                      </label>
                      <input
                        type='text'
                        name='linfocitos'
                        id='linfocitos'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>
                    <div className='col-span-2 sm:col-span-2'>
                      <label
                        htmlFor='monocitos'
                        className='block text-sm font-medium text-gray-700'
                      >
                        QTD de Monócitos
                      </label>
                      <input
                        type='text'
                        name='monocitos'
                        id='monocitos'
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
              onClick={clearAllFields}
              className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Limpar campos
            </button>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Armazenar lâmina
            </button>
          </div>
        </div>
      </form>

      <div className='md:grid md:grid-cols-4 md:gap-6'>
        {bloodSmear.length > 0 &&
          bloodSmear.map((bloodSmear, idx) => (
            <Laminas
              sequence={idx + 1}
              key={`${bloodSmear.data}${bloodSmear.laminaID}`}
              bastonetes={bloodSmear.bastonetes}
              data={bloodSmear.data}
              eosinofilos={bloodSmear.eosinofilos}
              laminaID={bloodSmear.laminaID}
              linfocitos={bloodSmear.linfocitos}
              monocitos={bloodSmear.monocitos}
              segmentados={bloodSmear.segmentados}
            />
          ))}
      </div>
    </AppContainer>
  );
};

export { Laminario };
