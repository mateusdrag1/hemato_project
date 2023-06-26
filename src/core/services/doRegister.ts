import { api } from '@/configs';
import { AxiosResponse } from 'axios';
import { IRegisterRequest, IRegisterResponse } from '../interfaces/register.interface';

export async function doRegister(
  data: IRegisterRequest,
): Promise<AxiosResponse<IRegisterResponse>> {
  return api.post('/register', data);
}
