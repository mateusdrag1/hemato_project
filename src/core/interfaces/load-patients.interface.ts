import { CreatePatientFormData } from '@/components/PatientForm/validate';
import { IPatient } from './patients.interface';

export interface IUseLoadPatients {
  isLoading: boolean;
  error: boolean;
  dataPatients: IPatient[];
  loadPatients: () => Promise<void>;
  createPatient: (patient: CreatePatientFormData) => Promise<void>;
  removePatient: (id: number) => Promise<void>;
}
