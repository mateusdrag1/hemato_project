const AppFooter = () => {
  return (
    <footer className='fixed bottom-0 right-0 p-4 text-xs'>
      <div className='flex gap-4'>
        <p>
          Versão: <span className='text-red-500'>Beta</span>
        </p>
        <span>
          Desenvolvido e mantido por:{' '}
          <a href='https://github.com/mateusdrag1/'>Matthieu Christian</a> &copy;{' '}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export { AppFooter };
