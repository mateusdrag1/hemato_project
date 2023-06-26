import { BookmarkIcon, CircleStackIcon, CubeIcon, HomeIcon } from '@heroicons/react/24/outline';

import { WBC } from './WBC';
import { Platelet } from './Platelet';
import { Dashboard } from './Dashboard';
import { RBC } from './RBC';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Patients } from './Patient';
import { Login } from './Login';
import { Register } from './Register';

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
];
