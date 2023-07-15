import '@styles/overview.scss';
import { Metadata } from 'next';
import OverviewHeader from './components/OverviewHeader';
import ProjectSummary from './components/ProjectSummary';
import Statistics from './components/Statistics';
import TaskSummary from './components/TaskSummary';

export const metadata: Metadata = {
  title: 'Overview',
};

const Overview = () => {
  return (
    <>
      <OverviewHeader />

      <section className="grid grid-cols-6 gap-8 p-8">
        <div className="col-span-2">
          <TaskSummary />
        </div>

        <div className="col-span-4">
          <Statistics />
          <ProjectSummary />
        </div>
      </section>
    </>
  );
};

export default Overview;
