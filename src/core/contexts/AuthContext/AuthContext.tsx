import { useLocalStorage } from '@/core/hooks/useLocalStorage';
import { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextType, AuthProviderProps, LoginData } from './interfaces';
import { doLogin } from '@/core/services/doLogin';
import { setSessionItem } from '@/core/helpers/session';
import { IRegisterRequest } from '@/core/interfaces/register.interface';
import { doRegister } from '@/core/services/doRegister';

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data: LoginData) => {
      await doLogin(data)
        .then((response) => {
          setSessionItem('@HP-Token', response.data.token);
          setUser(response.data);
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [navigate, setUser],
  );

  const register = useCallback(
    async (data: IRegisterRequest) => {
      await doRegister(data)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [navigate],
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate('/login', { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      register,
    }),
    [login, logout, user, register],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
