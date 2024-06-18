import {
  BookmarkIcon,
  CircleStackIcon,
  CubeIcon,
  HomeIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Atlas } from './Atlas';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { Patients } from './Patient';
import { Platelet } from './Platelet';
import { Privacy } from './Privacy';
import { RBC } from './RBC';
import { Register } from './Register';
import { Scanner } from './Scanner';
import { WBC } from './WBC';

interface RouteConfigProps {
  path: string;
  component: React.ComponentType;
  icon: typeof BookmarkIcon;
  name: string;
  protected?: boolean;
}

export const routesConfig: RouteConfigProps[] = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    icon: CircleStackIcon,
    protected: true,
  },
  {
    name: 'Pacientes',
    path: '/pacientes',
    component: Patients,
    icon: UserCircleIcon,
    protected: true,
  },
  {
    name: 'Série Eritrocitária',
    path: '/rbc',
    component: RBC,
    icon: HomeIcon,
    protected: true,
  },
  {
    name: 'Série Leucocitária',
    path: '/wbc',
    component: WBC,
    icon: BookmarkIcon,
    protected: true,
  },
  {
    name: 'Série Plaquetária',
    path: '/plaquetas',
    component: Platelet,
    icon: CubeIcon,
    protected: true,
  },
  {
    name: 'Atlas',
    path: '/atlas',
    component: Atlas,
    icon: CircleStackIcon,
    protected: true,
  },
  {
    name: 'Scanner',
    path: '/scanner',
    component: Scanner,
    icon: VideoCameraIcon,
    protected: true,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    icon: CircleStackIcon,
    protected: false,
  },
  {
    name: 'Register',
    path: '/register',
    component: Register,
    icon: CircleStackIcon,
    protected: false,
  },
  {
    name: 'Privacy',
    path: '/politica-de-privacidade',
    component: Privacy,
    icon: CircleStackIcon,
    protected: false,
  },
];
