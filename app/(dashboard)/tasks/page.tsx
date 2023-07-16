import '@styles/tasks.scss';
import { Metadata } from 'next';
import TaskContainer from './components/TaskContainer';

export const metadata: Metadata = {
  title: 'Tasks',
};

const page = () => {
  return (
    <>
      <TaskContainer />
    </>
  );
};

export default page;
