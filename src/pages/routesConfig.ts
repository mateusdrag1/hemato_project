import { BookmarkAltIcon, BookmarkIcon, DatabaseIcon, HomeIcon } from '@heroicons/react/outline';

import { WBC } from './WBC';
import { Platelet } from './Platelet';
import { Dashboard } from './Dashboard';
import { RBC } from './RBC';

interface RouteConfigProps {
  path: string;
  component: React.ComponentType;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

export const routesConfig: RouteConfigProps[] = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    icon: DatabaseIcon,
  },
  {
    name: 'Série Eritrocitária',
    path: '/rbc',
    component: RBC,
    icon: HomeIcon,
  },
  {
    name: 'Série Leucocitária',
    path: '/wbc',
    component: WBC,
    icon: BookmarkIcon,
  },
  {
    name: 'Série Plaquetária',
    path: '/plaquetas',
    component: Platelet,
    icon: BookmarkAltIcon,
  },
];
