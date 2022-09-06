import { HomeIcon } from '@heroicons/react/outline';
import Index from './Index';

interface RouteConfigProps {
  path: string;
  component: React.ComponentType;
  current: boolean;
  icon: React.ComponentType;
  name: string;
}

// get the current route
const currentRoute = window.location.pathname;

export const routesConfig: RouteConfigProps[] = [
  {
    name: 'Pagina Inicial',
    path: '/',
    component: Index,
    icon: HomeIcon,
    current: currentRoute === '/',
  },
];
