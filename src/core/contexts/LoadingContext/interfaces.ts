type LoadingContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export type { LoadingContextType, LoadingProviderProps };
