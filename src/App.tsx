import { useState } from 'react';

import AppNavbar from '@/components/Layout/AppNavbar';
import AppSidebar from '@/components/Layout/AppSidebar';

import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div>
          <AppSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className='md:pl-64 flex flex-col'>
            <AppNavbar setSidebarOpen={setSidebarOpen} />
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
