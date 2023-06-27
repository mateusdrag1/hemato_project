import { IPatient } from '@/core/interfaces/patients.interface';
import { Result } from '../Result';

type PatientCardProps = {
  data?: IPatient[];
  isFetching?: boolean;
  hasError?: boolean;

  handleRemove: (id: number) => void;
};

export const PatientCard: React.FC<PatientCardProps> = ({
  data,
  isFetching,
  hasError,
  handleRemove,
}) => {
  if (isFetching) return <div>Carregando...</div>;

  if (hasError) return <div>Erro ao carregar pacientes</div>;

  if (!data) return null;

  if (data.length === 0) return <div>Nenhum paciente cadastrado</div>;

  return (
    <>
      {data.map((patient) => (
        <Result
          key={`${patient.blade}-${patient.created_at}`}
          removeSmear={() => handleRemove(patient.id)}
          blade={patient.blade}
          createdAt={patient.created_at}
        >
          <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
            <div className='my-2'>
              Idade: <span className='ml-1 font-medium text-gray-900'>{patient.age}</span>
            </div>
            <div className='my-2'>
              Sexo:{' '}
              <span className='ml-1 font-medium text-gray-900'>
                {patient.genre === 'M' ? 'Masculino' : 'Feminino'}
              </span>
            </div>
          </div>
        </Result>
      ))}
    </>
  );
};
