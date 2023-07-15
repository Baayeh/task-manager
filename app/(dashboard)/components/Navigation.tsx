'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BiTask } from 'react-icons/bi';
import { GoProject } from 'react-icons/go';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const navLinks: NavLinks[] = [
  {
    name: 'Overview',
    icon: MdOutlineSpaceDashboard,
    href: '/overview',
  },
  {
    name: 'Tasks',
    icon: BiTask,
    href: '/tasks',
  },
  {
    name: 'Projects',
    icon: GoProject,
    href: '/projects',
  },
  {
    name: 'Notifications',
    icon: IoNotificationsOutline,
    href: '/notifications',
  },
  {
    name: 'Settings',
    icon: IoSettingsOutline,
    href: '/settings',
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.name} className="">
            <Link
              href={link.href}
              className={`${
                isActive ? 'bg-slate-500/40' : ''
              } flex items-center gap-x-2 rounded-md px-6 py-3 transition-colors duration-300 ease-in-out hover:bg-slate-500/40`}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Navigation;
