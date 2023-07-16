'use client';

import clearQuery from '@libs/clearQuery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface TabMenuProps {
  labels: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  setFirst?: (first: number) => void;
}

const TabMenu: React.FC<TabMenuProps> = ({
  labels,
  activeTab,
  setActiveTab,
  setFirst,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const changeTab = (index: number) => {
    clearQuery(router, params, pathname);
    setActiveTab(index);
    if (setFirst) setFirst(0);
  };

  return (
    <section className="task_header bg-[#e5edea] px-8 pb-8">
      <ul className="btn-tabs flex items-center">
        {labels.map((label, index) => (
          <li
            key={index}
            aria-label="tab"
            className={`${activeTab === index ? 'active' : ''} ${
              index === labels.length - 1
                ? 'rounded-e-md'
                : index === 0
                ? 'rounded-s-md'
                : ''
            } cursor-pointer bg-white px-2 py-1 text-sm`}
            onClick={() => changeTab(index)}
          >
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TabMenu;
