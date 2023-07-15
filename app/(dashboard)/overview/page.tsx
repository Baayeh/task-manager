import '@styles/overview.scss';
import { Metadata } from 'next';
import OverviewHeader from './components/OverviewHeader';

export const metadata: Metadata = {
  title: 'Overview',
};

const Overview = () => {
  return (
    <>
      <OverviewHeader />

      <section className="grid grid-cols-6 gap-8 p-8">
        <div className="col-span-2">Task Summary</div>

        <div className="col-span-4">
          <div>Statistics</div>
          <div>Project Summary</div>
        </div>
      </section>
    </>
  );
};

export default Overview;
