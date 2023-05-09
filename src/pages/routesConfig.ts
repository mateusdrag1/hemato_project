import { BookmarkIcon, CircleStackIcon, HomeIcon } from '@heroicons/react/24/outline';

import { WBC } from './WBC';
import { Platelet } from './Platelet';
import { Dashboard } from './Dashboard';
import { RBC } from './RBC';

interface RouteConfigProps {
  path: string;
  component: React.ComponentType;
  icon: typeof BookmarkIcon;
  name: string;
}

export const routesConfig: RouteConfigProps[] = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    icon: CircleStackIcon,
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
    icon: BookmarkIcon,
  },
];
