import '@styles/overview.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overview',
};

const Overview = () => {
  return (
    <>
      <h1>header</h1>

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
