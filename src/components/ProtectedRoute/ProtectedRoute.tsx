import { useAuth } from '@/core/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import AppNavbar from '../Layout/AppNavbar';
import AppSidebar from '../Layout/AppSidebar';

import { useState } from 'react';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useAuth();
  if (!user) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <AppSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='md:pl-64 flex flex-col'>
        <AppNavbar setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
};
