interface User {
  name: string;
  token: string;
}

type LoginData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (data: LoginData) => void;
  logout: () => void;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export type { AuthContextType, AuthProviderProps, LoginData };
