import { CreatePatientFormData } from '@/components/PatientForm/validate';
import { IPatient } from './patients.interface';
import { CreateSmearFormData } from '@/components/SmearForm/validate';
import { CreateRBCFormData } from '@/components/RBCForm/validate';
import { CreatePlateletFormData } from '@/components/PlateletForm/validate';

export interface IUseLoadPatients {
  isLoading: boolean;
  error: boolean;
  dataPatients: IPatient[];
  loadPatients: () => Promise<void>;
  createPatient: (patient: CreatePatientFormData) => Promise<void>;
  addLeukocytes: (id: string, data: CreateSmearFormData) => Promise<void>;
  addErythrocyte: (id: string, data: CreateRBCFormData) => Promise<void>;
  addPlatelets: (id: string, data: CreatePlateletFormData) => Promise<void>;
  removePatient: (id: number) => Promise<void>;
}
