import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routesConfig } from '@/pages/routesConfig';
import AppErrorDefault from '@/components/Layout/AppErrorDefault';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routesConfig.map((route, index) => {
          return <Route key={index} path={route.path} element={<route.component />} />;
        })}
        <Route path='*' element={<AppErrorDefault />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
