import { useCallback, useEffect, useState } from 'react';
import { IUseLoadPatients } from '../interfaces/load-patients.interface';
import { IPatient } from '../interfaces/patients.interface';
import { api } from '@/configs';
import { CreatePatientFormData } from '@/components/PatientForm/validate';

const useLoadPatients = (): IUseLoadPatients => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataPatients, setDataPatients] = useState<IPatient[]>([]);
  const [error, setError] = useState<boolean>(false);

  const loadPatients = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await api.get('/pacients');
      setDataPatients(response.data.patients);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createPatient = useCallback(async (data: CreatePatientFormData) => {
    setIsLoading(true);

    try {
      const response = await api.post('/pacients', data);

      setDataPatients((prevState) => [...prevState, response.data.patient]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addDataEntry = useCallback(
    async (id: string, endpoint: string, data: any) => {
      setIsLoading(true);

      try {
        await api.post(`/pacients/${id}/${endpoint}`, data);
        loadPatients();
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [loadPatients],
  );

  const removePatient = useCallback(async (id: number): Promise<void> => {
    setIsLoading(true);

    try {
      await api.delete(`/pacients/${id}`);

      setDataPatients((prevState) => prevState.filter((patient) => patient.id !== id));
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPatients();
  }, [loadPatients]);

  return {
    isLoading,
    error,
    dataPatients,
    loadPatients,
    createPatient,
    removePatient,
    addErythrocyte: (id, data) =>
      addDataEntry(id, 'erythrocytes', { ...data, erythrocyte: data.erythrocytes }),
    addLeukocytes: (id, data) => addDataEntry(id, 'leukocytes', data),
    addPlatelets: (id, data) => addDataEntry(id, 'platelets', data),
  };
};

export { useLoadPatients };
