'use client';

import moment from 'moment';
import Image from 'next/image';
import { Avatar } from 'primereact/avatar';

const imageLoader = ({ src, width, quality }: ImageLoader) => {
  return `https://res.cloudinary.com/dskl0qde4/image/upload/v1687689348/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAKUlEQVR42u3MwQAAAAgEsM6fIIE4g6jnBrBM16sIhUKhUCgUCoVC4c0CJuQyAeiNzJYAAAAASUVORK5CYII=';

const TaskDetails: React.FC<any> = ({ task }: { task: Task }) => {
  return (
    <>
      {task ? (
        <>
          <div className="flex items-center gap-x-4">
            <h1 className="text-xl font-semibold">Task details</h1>
            <span className="rounded bg-green-800/20 px-2 py-1 text-xs text-gray-500">
              {task.id}
            </span>
          </div>

          <ul className="mt-4 w-[20rem]">
            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Name</p>
              <p className="font-bold">{task.title}</p>
            </li>

            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Status</p>
              <p className="font-bold">
                {task.status === 'todo'
                  ? 'To do'
                  : task.status === 'in-progress'
                  ? 'In progress'
                  : 'Completed'}
              </p>
            </li>

            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Priority</p>
              <p
                className={`${
                  task.priority === 'high'
                    ? 'bg-orange-400'
                    : task.priority === 'medium'
                    ? 'bg-orange-200'
                    : 'bg-green-200'
                } rounded px-1 py-[0.1rem] text-xs text-gray-600`}
              >
                {task.priority}
              </p>
            </li>

            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Assignee</p>
              <div className="flex items-center gap-x-2">
                <div className="">
                  <Avatar
                    image="https://res.cloudinary.com/dskl0qde4/image/upload/v1683909385/profile_pic_eviqtl.jpg"
                    shape="circle"
                  />
                </div>
                <p className="font-bold">Kwasi Baayeh</p>
              </div>
            </li>

            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Start date</p>
              <p className="font-bold">
                {moment(task.start_date).format('MMM DD, YYYY')}
              </p>
            </li>

            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Target date</p>
              <p className="font-bold">
                {moment(task.end_date).format('MMM DD, YYYY')}
              </p>
            </li>

            <li className="mb-4 flex items-center justify-between text-sm">
              <p className="text-gray-500">Project</p>
              <p className="font-bold">TaskBuddy Group</p>
            </li>
          </ul>
        </>
      ) : (
        <>
          <div className="mx-auto h-[300px] w-[300px]">
            <Image
              loader={imageLoader}
              src="Sandy_Tech-22_Single-09_tvpmb1.jpg"
              alt="No Data to display"
              width={300}
              height={300}
              loading="lazy"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="rounded-full"
            />
          </div>
          <p className="mt-6 text-center text-gray-500">
            Select a task to see its details
          </p>
        </>
      )}
    </>
  );
};
export default TaskDetails;
