import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './core/contexts/AuthContext';
import AppRoutes from './routes';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
    >
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
