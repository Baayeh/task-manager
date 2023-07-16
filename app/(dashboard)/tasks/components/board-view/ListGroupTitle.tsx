'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { IoMdAdd } from 'react-icons/io';

interface ListTitleProps {
  totalTasks: number;
  addTask: () => void;
  status: string;
  Icon: IconType;
}

const ListGroupTitle: React.FC<ListTitleProps> = ({
  Icon,
  totalTasks,
  addTask,
  status,
}) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <span>
          <Icon />
        </span>
        <div className="flex items-center gap-x-1">
          <h2 className="text-xl font-semibold">{status}</h2>
          <span className="text-xs text-gray-500">({totalTasks})</span>
        </div>
      </div>
      <button type="button" onClick={addTask} className="text-gray-500">
        <span>
          <IoMdAdd />
        </span>
      </button>
    </div>
  );
};

export default ListGroupTitle;
