'use client';

import tasks from '@data/tasks';
import { BiLoaderCircle } from 'react-icons/bi';
import { BsCircle, BsCircleHalf } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';
import TaskListGroup from './TaskListGroup';

const BoardView = () => {
  const currDate = new Date();

  const compareTasksByPriority = (
    a: { priority: string },
    b: { priority: string }
  ) => {
    if (a.priority === 'high' && b.priority !== 'high') {
      return -1;
    } else if (a.priority === 'medium' && b.priority === 'low') {
      return -1;
    } else if (a.priority === 'medium' && b.priority === 'high') {
      return 1;
    } else if (a.priority === 'low' && b.priority !== 'low') {
      return 1;
    } else {
      return 0;
    }
  };

  const tasksTodo = tasks
    .filter((task) => {
      const endDate = new Date(task.end_date);
      return task.status === 'todo' && endDate > currDate;
    })
    .sort(compareTasksByPriority);

  const tasksInProgress = tasks
    .filter((task) => {
      const endDate = new Date(task.end_date);

      return task.status === 'in-progress' && endDate >= currDate;
    })
    .sort(compareTasksByPriority);

  const tasksOverdue = tasks
    .filter((task) => {
      const endDate = new Date(task.end_date);

      return task.status !== 'done' && endDate < currDate;
    })
    .sort(compareTasksByPriority);

  const tasksDone = tasks
    .filter((task) => {
      return task.status === 'done';
    })
    .sort(compareTasksByPriority);

  return (
    <section className="grid grid-cols-4 gap-8 p-8">
      <TaskListGroup
        status="To do"
        icon={BsCircle}
        addTask={() => console.log('Add Task')}
        tasks={tasksTodo}
      />
      <TaskListGroup
        status="In Progress"
        icon={BsCircleHalf}
        addTask={() => console.log('In progress')}
        tasks={tasksInProgress}
      />
      <TaskListGroup
        status="Backlog"
        icon={BiLoaderCircle}
        addTask={() => console.log('Backlog')}
        tasks={tasksOverdue}
      />
      <TaskListGroup
        status="Done"
        icon={FaRegCheckCircle}
        addTask={() => console.log('Done')}
        tasks={tasksDone}
      />
    </section>
  );
};
export default BoardView;
