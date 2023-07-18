const AppFooter = () => {
  return (
    <footer className='p-4 text-xs flex justify-center md:justify-end'>
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
