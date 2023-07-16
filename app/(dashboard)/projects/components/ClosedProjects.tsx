'use client';

import ListCard from '@app/(dashboard)/components/cards/ListCard';
import clearQuery from '@libs/clearQuery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import ListHeader from './ListHeader';

const ClosedProjects: React.FC<ProjectsViewProps> = ({
  projects,
  totalProjects,
  rows,
  first,
  setFirst,
  setRows,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    clearQuery(router, params, pathname);
  };
  return (
    <>
      <ListHeader title="Closed Projects">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={totalProjects}
          onPageChange={onPageChange}
          template={{ layout: 'PrevPageLink NextPageLink' }}
          id="project_paginator"
        />
      </ListHeader>

      <section>
        {projects.map((project) => (
          <ListCard key={project.id} {...project} projectId={project.id} />
        ))}
      </section>
    </>
  );
};

export default ClosedProjects;
