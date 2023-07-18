import { capitalize } from '@/core/helpers/functions';
import { Result } from '../Result';
import { ICell } from '@/core/interfaces/cells.interface';

type CellCardProps = {
  data?: ICell[];
  isFetching?: boolean;
  hasError?: boolean;
};

export const CellCard: React.FC<CellCardProps> = ({ data, isFetching, hasError }) => {
  if (isFetching) return <div>Carregando...</div>;

  if (hasError) return <div>Erro ao carregar as série branca</div>;

  if (!data) return null;

  if (data.length === 0) return <div>Nenhuma série branca cadastrada</div>;

  return (
    <>
      {data.map((cell) => {
        return (
          <Result
            key={cell.id}
            createdAt={cell.created_at}
            blade={String(cell.id)}
            isCell
            image={cell.image}
          >
            <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
              <div className='my-2'>
                Nome:
                <span className='ml-1 font-medium text-gray-900'>{capitalize(cell.name)}</span>
              </div>
              <div className='my-2'>
                Morfologia:
                <span className='ml-1 font-medium text-gray-900'>{cell.morphology}</span>
              </div>
              <div className='my-2'>
                Categoria:
                <span className='ml-1 font-medium text-gray-900'>{cell.category.name}</span>
              </div>
              <div className='my-2'>
                Relevância Clinica:
                <span className='ml-1 font-medium text-gray-900'>{cell.clinical_relevance}</span>
              </div>
            </div>
          </Result>
        );
      })}
    </>
  );
};
