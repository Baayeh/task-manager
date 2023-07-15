import { TasksCompletion } from '@app/(dashboard)/tasks/components';
import dynamic from 'next/dynamic';

const TasksChart = dynamic(
  () =>
    import('@app/(dashboard)/tasks/components').then((mod) => mod.TasksChart),
  {
    ssr: false,
  }
);

const Statistics = () => {
  return (
    <section className="grid grid-cols-6 gap-2">
      <TasksChart />
      <TasksCompletion />
    </section>
  );
};
export default Statistics;
