import { IRegisterRequest } from '@/core/interfaces/register.interface';

interface User {
  user: {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
}

type LoginData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  register: (data: IRegisterRequest) => void;
  login: (data: LoginData) => void;
  logout: () => void;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export type { AuthContextType, AuthProviderProps, LoginData };
