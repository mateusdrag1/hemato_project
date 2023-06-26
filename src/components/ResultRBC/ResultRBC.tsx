import { IPatient } from '@/core/interfaces/patients.interface';
import { Result } from '../Result/Result';
import { WBCSerie, erythrocytes, hematocrit, hemoglobin, rdw } from './RateRBC';

export const ResultRBC: React.FC<{
  patient: IPatient;
  removeSmear?: (id: string) => void;
}> = ({ patient }) => {
  const getLastErythrocyte = () => patient.erythrocyte[patient.erythrocyte.length - 1];
  const { CHCM, CHCMResult, HCM, HCMResult, VCM, VCMResult } = WBCSerie({
    erythrocytesIn: getLastErythrocyte()?.erythrocyte,
    hematocritIn: getLastErythrocyte()?.hematocrit,
    hemoglobinIn: getLastErythrocyte()?.hemoglobin,
  });

  if (!getLastErythrocyte()) return <></>;

  return (
    <Result blade={patient.blade} createdAt={patient.createdAt}>
      <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
        <div className='my-2'>
          Eritrocitos:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {getLastErythrocyte().erythrocyte} - {erythrocytes(getLastErythrocyte().erythrocyte)}
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
};
