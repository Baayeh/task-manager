import { ProjectCard } from '@app/(dashboard)/projects/components';
import Link from 'next/link';

const ProjectSummary = () => {
  return (
    <section className="mt-[1.2rem]">
      <div className="mb-5 flex items-center gap-x-4">
        <h1 className="font-bold">My projects</h1>
        <Link
          href="/dashboard/projects"
          className="text-sm text-[#FF7A50] hover:underline"
        >
          view all
        </Link>
      </div>

      <section className="flex flex-col gap-y-2">
        <ProjectCard />
        <ProjectCard />
      </section>
    </section>
  );
};
export default ProjectSummary;
