'use client';

import ListCard from '@app/(dashboard)/components/cards/ListCard';
import moment from 'moment';
import Link from 'next/link';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';

const ProjectDetails = ({ project }: { project: Project }) => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Project for {project.title}</h2>
        <p className="mb-3 mt-5 text-sm text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nesciunt
          corporis inventore eos mollitia ad distinctio natus quasi alias.
        </p>
      </div>

      <ul className="mt-4 w-[20rem]">
        <li className="mb-4 flex items-center justify-between text-sm">
          <p className="text-gray-500">Name</p>
          <p className="font-bold">{project.title}</p>
        </li>
        <li className="mb-4 flex items-center justify-between text-sm">
          <p className="text-gray-500">Start date</p>
          <p className="font-bold">
            {moment(project.start_date).format('MMM DD, YYYY')}
          </p>
        </li>
        <li className="mb-4 flex items-center justify-between text-sm">
          <p className="text-gray-500">Target date</p>
          <p className="font-bold">
            {moment(project.end_date).format('MMM DD, YYYY')}
          </p>
        </li>
        <li className="mb-4 flex items-center justify-between text-sm">
          <p className="text-gray-500">Members</p>
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
        </li>
      </ul>

      <section className="mt-6">
        <div className="flex items-center gap-x-3">
          <h2 className="font-semibold">Tasks</h2>
          <Link href="!#" className="text-sm text-gray-500">
            view all
          </Link>
        </div>

        <div className="mt-2">
          {project.tasks.slice(0, 3).map((task) => (
            <ListCard
              key={task.id}
              taskId={task.id}
              title={task.title}
              priority={task.priority}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
