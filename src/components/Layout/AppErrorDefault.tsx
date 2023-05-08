const AppErrorDefault = () => {
  return (
    <div className='min-h-full pt-16 pb-12 flex flex-col bg-white'>
      <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex-shrink-0 flex justify-center'>
          <a href='/' className='inline-flex'>
            <span className='sr-only'>HematoPedia</span>
            <img
              className='h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=600'
              alt=''
            />
          </a>
        </div>
        <div className='py-16'>
          <div className='text-center'>
            <p className='text-sm font-semibold text-green-600 uppercase tracking-wide'>Erro 404</p>
            <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
              Página não encontrada.
            </h1>
            <p className='mt-2 text-base text-gray-500'>
              Desculpe, não conseguimos encontrar a página que você está procurando.
            </p>
            <div className='mt-6'>
              <a href='/' className='text-base font-medium text-green-600 hover:text-green-500'>
                Voltar para página inicial<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className='flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex justify-center space-x-4'>
          <a href='/' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
            Entrar em contato com suporte
          </a>
          <span className='inline-block border-l border-gray-300' aria-hidden='true' />
          <a href='/' className='text-sm font-medium text-gray-500 hover:text-gray-600'>
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default AppErrorDefault;
