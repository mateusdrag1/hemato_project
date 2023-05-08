import AppContainer from '@/components/Layout/AppContainer';

export const Platelet: React.FC = () => {
  return (
    <AppContainer title='Série Plaquetária'>
      <div className='text-red-300'>
        <h1>Em desenvolvimento</h1>
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
