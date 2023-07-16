'use client';

import React from 'react';
import { IconType } from 'react-icons';
import BoardViewCard from '../cards/BoardViewCard';
import ListGroupBtn from './ListGroupBtn';
import ListGroupTitle from './ListGroupTitle';

interface TaskListGroupProps {
  status: string;
  icon: IconType;
  addTask: () => void;
  tasks: Task[];
}

const TaskListGroup: React.FC<TaskListGroupProps> = ({
  status,
  tasks,
  icon: Icon,
  addTask,
}) => {
  return (
    <section>
      <ListGroupTitle
        Icon={Icon}
        totalTasks={tasks.length}
        addTask={addTask}
        status={status}
      />

      <div className="board_cards flex h-[40rem] flex-col gap-4 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <BoardViewCard key={task.id} task={task} />
        ))}

        <ListGroupBtn />
      </div>
    </section>
  );
};

export default TaskListGroup;
