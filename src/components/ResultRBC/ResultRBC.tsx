import { Patient } from '@/pages/Index';

import { Result } from '../Result/Result';
import { WBCSerie, erythrocytes, hematocrit, hemoglobin, rdw } from './RateRBC';

export const ResultRBC: React.FC<{
  patient: Patient;
  removeSmear: (id: string) => void;
}> = ({ patient, removeSmear }) => {
  const { CHCM, CHCMResult, HCM, HCMResult, VCM, VCMResult } = WBCSerie({
    erythrocytesIn: patient.erythrocytes,
    hematocritIn: patient.hematocrit,
    hemoglobinIn: patient.hemoglobin,
  });

  return (
    <Result
      removeSmear={() => removeSmear(patient.smear_id)}
      smear_id={patient.smear_id}
      created_at={patient.created_at}
    >
      <div className='mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0'>
        <div className='my-2'>
          Eritrocitos:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {patient.erythrocytes} - {erythrocytes(patient.erythrocytes)}
          </span>
        </div>
        <div className='my-2'>
          Hemoglobina:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {patient.hemoglobin} - {hemoglobin(patient.hemoglobin)}
          </span>
        </div>
        <div className='my-2'>
          Hematócrito:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {patient.hematocrit} - {hematocrit(patient.hematocrit)}
          </span>
        </div>
        <div className='my-2'>
          RDW:{' '}
          <span className='ml-1 font-medium text-gray-900'>
            {patient.rdw} - {rdw(patient.rdw)}
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
