import { IPatient } from '@/core/interfaces/patients.interface';
import { Result } from '../Result';
import { WBCSerie, erythrocytes, hematocrit, hemoglobin, rdw } from './RateRBC';

type RBCCardProps = {
  data?: IPatient[];
  isFetching?: boolean;
  hasError?: boolean;
};

export const RBCCard: React.FC<RBCCardProps> = ({ data, isFetching, hasError }) => {
  if (isFetching) return <div>Carregando...</div>;

  if (hasError) return <div>Erro ao carregar as série vermelha</div>;

  if (!data) return null;

  if (data.length === 0) return <div>Nenhuma série vermelha cadastrada</div>;

  return (
    <>
      {data.map((patient) => {
        const getLastErythrocyte = () => patient.erythrocyte[patient.erythrocyte.length - 1];
        const { CHCM, CHCMResult, HCM, HCMResult, VCM, VCMResult } = WBCSerie({
          erythrocytesIn: getLastErythrocyte()?.erythrocyte,
          hematocritIn: getLastErythrocyte()?.hematocrit,
          hemoglobinIn: getLastErythrocyte()?.hemoglobin,
        });

        if (!getLastErythrocyte()) return <></>;

        return (
          <Result
            key={`${patient.blade}-${patient.created_at}`}
            blade={patient.blade}
            createdAt={patient.created_at}
          >
            <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
              <div className='my-2'>
                Eritrocitos:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {getLastErythrocyte().erythrocyte} -{' '}
                  {erythrocytes(getLastErythrocyte().erythrocyte)}
                </span>
              </div>
              <div className='my-2'>
                Hemoglobina:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {getLastErythrocyte().hemoglobin} - {hemoglobin(getLastErythrocyte().hemoglobin)}
                </span>
              </div>
              <div className='my-2'>
                Hematócrito:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {getLastErythrocyte().hematocrit} - {hematocrit(getLastErythrocyte().hematocrit)}
                </span>
              </div>
              <div className='my-2'>
                RDW:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {getLastErythrocyte().RDW} - {rdw(getLastErythrocyte().RDW)}
                </span>
              </div>

              <div className='my-2'>
                HCM:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {HCM} - {HCMResult()}
                </span>
              </div>

              <div className='my-2'>
                CHCM:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {CHCM} - {CHCMResult()}
                </span>
              </div>

              <div className='my-2'>
                VCM:{' '}
                <span className='ml-1 font-medium text-gray-900'>
                  {VCM} - {VCMResult()}
                </span>
              </div>
            </div>
          </Result>
        );
      })}
    </>
  );
};
