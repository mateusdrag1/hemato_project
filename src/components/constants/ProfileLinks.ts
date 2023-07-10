import { doLogout } from '@/core/services/doLogout';
import { UserIcon } from '@heroicons/react/24/solid';

export const ProfileLinks = [
  {
    name: 'Perfil',
    path: '#',
    icon: UserIcon,
    current: false,
  },
  {
    name: 'Sair',
    path: '#',
    handleAction: true,
    action: doLogout,
    icon: UserIcon,
    current: false,
  },
];
