'use client';

import moment from 'moment';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import qs from 'query-string';
import { useCallback } from 'react';
import { BsDot } from 'react-icons/bs';
import { RxCaretRight } from 'react-icons/rx';

interface ListCardProps {
  title: string;
  taskId?: string;
  projectId?: string;
  priority?: string;
  start_date?: string;
  end_date?: string;
  tasks?: Task[];
}

const ListCard: React.FC<ListCardProps> = ({
  title,
  taskId,
  projectId,
  priority,
  start_date,
  end_date,
  tasks,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    let updatedQuery: any = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    if (taskId) {
      updatedQuery = {
        ...currentQuery,
        taskId,
      };

      if (params?.get('taskId') === taskId) {
        delete updatedQuery.taskId;
      }
    } else if (projectId) {
      updatedQuery = {
        ...currentQuery,
        projectId,
      };

      if (params?.get('projectId') === projectId) {
        delete updatedQuery.projectId;
      }
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [projectId, pathname, params, taskId, router]);

  return (
    <button
      className={`${
        params?.get('taskId') === taskId ||
        params?.get('projectId') === projectId
          ? 'bg-[#252727] text-[#E5EDEA]'
          : 'bg-[#E5EDEA]'
      } card mb-2 flex w-full items-center justify-between rounded-md  p-4 text-start transition duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <div>
        {tasks ? (
          <>
            <h2 className="text-sm font-bold">{title}</h2>
            <p className="flex items-center gap-x-2 text-xs text-gray-500">
              <span>{tasks.length} tasks</span>
              <span>
                <BsDot />
              </span>
              <span>4 overdue</span>
            </p>
          </>
        ) : (
          <>
            <p className="task-id text-xs text-gray-500">{taskId}</p>
            <h2 className="text-sm font-bold">{title}</h2>
          </>
        )}
      </div>

      <div className="flex items-center gap-x-6">
        <div className="contributors">
          <AvatarGroup>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              shape="circle"
            />
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
              shape="circle"
            />
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
              shape="circle"
            />
          </AvatarGroup>
        </div>
        {priority ? (
          <span
            className={`${
              priority === 'high'
                ? 'bg-orange-400'
                : priority === 'medium'
                ? 'bg-orange-200'
                : 'bg-green-200'
            } rounded px-1 py-[0.1rem] text-xs text-gray-600`}
          >
            {priority}
          </span>
        ) : null}
        {start_date && end_date ? (
          <p className="text-xs">
            {moment(start_date).format('MMM DD')} -{' '}
            {moment(end_date).format('MMM DD')}
          </p>
        ) : null}
        <span>
          <RxCaretRight />
        </span>
      </div>
    </button>
  );
};

export default ListCard;
