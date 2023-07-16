'use client';

import tasks from '@/data/tasks';
import ListCard from '@app/(dashboard)/components/cards/ListCard';
import { useSearchParams } from 'next/navigation';
import TaskDetails from '../TaskDetails';

const ListView = () => {
  const params = useSearchParams();
  const currDate = new Date();

  const id = params?.get('taskId');
  const task = tasks.find((task: { id: string | null }) => task.id === id);

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

      return task.status === 'in-progress' && endDate > currDate;
    })
    .sort(compareTasksByPriority);

  const tasksOverdue = tasks
    .filter((task) => {
      const endDate = new Date(task.end_date);

      return task.status !== 'done' && endDate < currDate;
    })
    .sort(compareTasksByPriority);

  return (
    <section className="relative grid grid-cols-2">
      <div className="border-r p-8">
        <div className="mb-4">
          <h1 className="mb-2 text-xl font-semibold">To do</h1>
          {tasksTodo.map((task) => (
            <ListCard key={task.id} {...task} taskId={task.id} />
          ))}
        </div>
        <div className="mb-4">
          <h1 className="mb-2 text-xl font-semibold">In progress</h1>
          {tasksInProgress.map((task) => (
            <ListCard key={task.id} {...task} taskId={task.id} />
          ))}
        </div>
        <div className="mb-4">
          <h1 className="mb-2 text-xl font-semibold">Backlog</h1>
          {tasksOverdue.map((task) => (
            <ListCard key={task.id} {...task} taskId={task.id} />
          ))}
        </div>
      </div>
      <div className="fixed right-0 top-[11rem] z-10 h-[30rem] w-[30rem] p-8">
        <TaskDetails task={task} />
      </div>
    </section>
  );
};
export default ListView;
