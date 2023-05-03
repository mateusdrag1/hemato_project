import { HomeIcon, LockOpenIcon } from '@heroicons/react/outline';
import Index from './Index';
import { Laminario } from './Laminario';

interface RouteConfigProps {
  path: string;
  component: React.ComponentType;
  current: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
  {
    name: 'Lâminário',
    path: '/laminas',
    component: Laminario,
    icon: LockOpenIcon,
    current: currentRoute === '/laminas',
  },
];
