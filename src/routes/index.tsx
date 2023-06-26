import { Routes, Route } from 'react-router-dom';
import { routesConfig } from '@/pages/routesConfig';
import AppErrorDefault from '@/components/Layout/AppErrorDefault';
import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected ? (
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>
              ) : (
                <route.component />
              )
            }
          />
        );
      })}
      <Route path='*' element={<AppErrorDefault />} />
    </Routes>
  );
};

export default AppRoutes;
