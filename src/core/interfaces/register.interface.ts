export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: string;
  name: string;
  created_at: string;
  updated_at: string;
}
