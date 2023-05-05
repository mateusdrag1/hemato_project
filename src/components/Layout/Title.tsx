interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <div className='max-w-7xl mx-auto rounded-md px-4 sm:px-6 md:px-8 bg-[#0065B2]'>
        <h1 className='text-lg py-2 font-semibold text-white first-letter:uppercase'>
          {title || 'Title'}
        </h1>
      </div>
    </>
  );
};

export default Title;
