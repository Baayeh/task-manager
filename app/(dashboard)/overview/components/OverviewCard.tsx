import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  number: string;
  unit: string;
  icon: IconType;
}

const OverviewCard: React.FC<CardProps> = ({
  title,
  number,
  unit,
  icon: Icon,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2>{title}</h2>

      <section className="flex justify-between items-center mt-5">
        <div className="unit-section flex items-center gap-x-1">
          <p className="number text-3xl font-semibold">{number}</p>
          <p className="unit text-lg">{unit}</p>
        </div>

        <span className="bg-[#e5edea] p-1 rounded-md">
          <Icon size={20} />
        </span>
      </section>
    </div>
  );
};
export default OverviewCard;
