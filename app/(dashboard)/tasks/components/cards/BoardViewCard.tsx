'use client';

import moment from 'moment';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

interface Task {
  id: string;
  title: string;
  priority: string;
  start_date: string;
  end_date: string;
}

const BoardViewCard = ({ task }: { task: Task }) => {
  return (
    <div className="grid gap-10 rounded-md bg-[#E5EDEA] p-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">{task.title}</h2>
        <p className="text-xs text-gray-500">{task.id}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span
            className={`${
              task.priority === 'high'
                ? 'bg-orange-400'
                : task.priority === 'medium'
                ? 'bg-orange-200'
                : 'bg-green-200'
            } rounded px-1 py-[0.1rem] text-xs text-gray-600`}
          >
            {task.priority}
          </span>
          <p className="mt-1 text-xs">
            {moment(task.start_date).format('MMM DD')} -{' '}
            {moment(task.end_date).format('MMM DD')}
          </p>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default BoardViewCard;
