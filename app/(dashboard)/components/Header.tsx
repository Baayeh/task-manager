'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBtn from './SearchBtn';

const Header = () => {
  const pathname = usePathname();

  const setBreadcrumb = () => {
    const segments = pathname.split('/');
    segments.shift();

    const formatSegment = segments.map((segment) => {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    });

    const breadcrumb = formatSegment.join(' > ');

    return breadcrumb;
  };

  setBreadcrumb();

  const showGreeting = () => {
    let today = new Date();
    let currentHour = today.getHours();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 16) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const showTitle = () => {
    switch (pathname) {
      case '/overview':
        return 'Overview';
      case '/tasks':
        return 'Tasks';
      case '/tasks/new':
        return 'Create Task';
      case '/projects':
        return 'Projects';
      case '/projects/new':
        return 'Create Project';
      case '/notifications':
        return 'Notifications';
      case '/settings':
        return 'Settings';
      default:
        return 'Profile';
    }
  };

  const title = showTitle();
  const greeting = showGreeting();

  return (
    <section className="bg-[#e5edea] px-8 pb-6 pt-10">
      <div className="flex items-center justify-between">
        <div>
          {pathname === '/overview' ? (
            <p className="text-xs text-gray-600">{greeting}, Kwasi!</p>
          ) : (
            <p className="text-xs text-gray-600">{setBreadcrumb()}</p>
          )}
          <h2 className="text-3xl font-medium">{title}</h2>
        </div>
        <div className="header-actions flex items-center justify-center gap-x-5">
          <SearchBtn />
          {title === 'Overview' || pathname.startsWith('/projects') ? (
            <Link
              href="/projects/new"
              className="rounded-md bg-[#ff7a50] px-6 py-3 text-xs text-[#f4f6f7] transition-colors duration-300 ease-in-out hover:bg-orange-500"
            >
              Create new project
            </Link>
          ) : pathname.startsWith('/tasks') ? (
            <Link
              href="/tasks/new"
              className="rounded-md bg-[#ff7a50] px-6 py-3 text-xs text-[#f4f6f7] transition-colors duration-300 ease-in-out hover:bg-orange-500"
            >
              Create new task
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default Header;
