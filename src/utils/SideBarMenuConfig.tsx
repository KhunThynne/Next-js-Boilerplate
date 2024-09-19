import { MdHome } from 'react-icons/md';

type SideBarMenuItem = {
  label: string;
  href: string;
  Icon?: React.ComponentType;
};

type SideBarMenuItems = {
  items: SideBarMenuItem[];
};

export const SideBarMenuConfig: SideBarMenuItems = {
  items: [
    {
      label: 'หน้าแรก',
      href: '/home',
      Icon: MdHome,
    },
    {
      label: 'My Feed',

      href: 'https://pantip.com/home/feed',
    },
    {
      label: 'Pantip Pick',

      href: 'https://pantip.com/home/pick',
    },
    {
      label: 'Pantip Hitz',

      href: 'https://pantip.com/home/hitz',
    },
    {
      label: 'Explore',

      href: 'https://pantip.com/home/explore',
    },
  ],
};
