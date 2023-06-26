import { api } from '@/configs';
import { AxiosResponse } from 'axios';
import { ILoginResponse } from '../interfaces';

export async function doLogin(
  data: Record<string, unknown>,
): Promise<AxiosResponse<ILoginResponse>> {
  return api.post('/login', data);
}
