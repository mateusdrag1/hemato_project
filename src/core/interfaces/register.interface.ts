export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  user: IUser;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
}
