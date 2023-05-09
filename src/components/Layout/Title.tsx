interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div>
      <h1 className='text-lg py-2 font-normal text-gray-400 first-letter:uppercase'>
        {title || 'Title'}
      </h1>
    </div>
  );
};

export default Title;
