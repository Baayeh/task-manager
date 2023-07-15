import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import TaskCard from './TaskCard';

const TaskSummary = () => {
  return (
    <>
      <div className="mb-5 flex items-center gap-x-4">
        <h1 className="font-bold">My tasks</h1>
        <Link
          href="/dashboard/tasks"
          className="text-sm text-[#FF7A50] hover:underline"
        >
          view all
        </Link>
      </div>

      <section className="grid gap-2">
        <TaskCard
          id="ID KL-2"
          title="Reports animation"
          priority="high"
          active={true}
        />
        <TaskCard
          id="ID LG-1528"
          title="Homepage illustrations"
          priority="medium"
          active={false}
        />
        <TaskCard
          id="ID AB-9813"
          title="Authentication pages"
          priority="low"
          active={false}
        />

        <Link
          href="/dashboard/tasks/new"
          className="flex h-[6rem] items-center justify-between rounded-md border border-dashed border-[#FF7A50] p-4 text-[#FF7A50]"
        >
          <span>Add new task</span>
          <span>
            <AiOutlinePlus />
          </span>
        </Link>
      </section>
    </>
  );
};
export default TaskSummary;
