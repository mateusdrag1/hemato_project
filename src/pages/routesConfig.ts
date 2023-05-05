import {
  BookmarkAltIcon,
  BookmarkIcon,
  DatabaseIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import Index from './Index';
import { Laminario } from './Laminario';
import { Platelet } from './Platelet';
import { Dashboard } from './Dashboard';
import { Patients } from './Patients';

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
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    icon: DatabaseIcon,
    current: currentRoute === '/dashboard',
  },
  // {
  //   name: 'Pacientes',
  //   path: '/pacientes',
  //   component: Patients,
  //   icon: UserGroupIcon,
  //   current: currentRoute === '/pacientes',
  // },
  {
    name: 'Série Eritrocitária',
    path: '/',
    component: Index,
    icon: HomeIcon,
    current: currentRoute === '/',
  },
  {
    name: 'Série Leucocitária',
    path: '/laminas',
    component: Laminario,
    icon: BookmarkIcon,
    current: currentRoute === '/laminas',
  },
  {
    name: 'Série Plaquetária',
    path: '/plaquetas',
    component: Platelet,
    icon: BookmarkAltIcon,
    current: currentRoute === '/plaquetas',
  },
];
