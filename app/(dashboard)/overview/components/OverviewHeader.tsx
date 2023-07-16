import { BiTimeFive } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
import { GrProjects, GrTasks } from 'react-icons/gr';
import OverviewCard from './OverviewCard';

const OverviewHeader = () => {
  return (
    <section className="grid grid-cols-4 gap-8 bg-[#e5edea] px-8 pb-8">
      <OverviewCard
        title="Hours this week"
        number="32"
        unit="/hrs"
        icon={BiTimeFive}
      />
      <OverviewCard
        title="Projects completed"
        number="78"
        unit="%"
        icon={GrProjects}
      />
      <OverviewCard title="Tasks in due" number="32" unit="%" icon={FaTasks} />
      <OverviewCard
        title="New assigned"
        number="45"
        unit="tasks"
        icon={GrTasks}
      />
    </section>
  );
};
export default OverviewHeader;
