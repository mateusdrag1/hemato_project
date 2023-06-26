import { createContext, useState } from 'react';
import { LoadingContextType, LoadingProviderProps } from './interfaces';

const LoadingContext = createContext<LoadingContextType>({} as LoadingContextType);

function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };
