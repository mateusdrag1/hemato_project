export interface IPatient {
  id: number;
  age: number;
  blade: string;
  genre: 'M' | 'F';
  erythrocyte: IPatientErythrocyte[];
  leukocyte: IPatientLeukocyte[];
  platelets: IPatientPlatelet[];
  created_at: string;
  updated_at: string;
}

export interface IPatientErythrocyte {
  erythrocyte: number;
  hemoglobin: number;
  hematocrit: number;
  RDW: number;
}

export interface IPatientLeukocyte {
  leukocyte: number;
  neutrophils: number;
  bandNeutrophils: number;
  lymphocytes: number;
  monocytes: number;
  eosinophils: number;
  basophils: number;
}

export interface IPatientPlatelet {
  platelets: number;
}
