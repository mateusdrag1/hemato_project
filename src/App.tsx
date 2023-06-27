import { AuthProvider } from './core/contexts/AuthContext';
import AppRoutes from './routes';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}
