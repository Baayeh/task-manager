'use client';

import projects from '@/data/projects';
import TabMenu from '@app/(dashboard)/components/TabMenu';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import ActiveProjects from './ActiveProjects';
import AllProjects from './AllProjects';
import ClosedProjects from './ClosedProjects';
import ProjectDetails from './ProjectDetails';

const imageLoader = ({ src, width, quality }: ImageLoader) => {
  return `https://res.cloudinary.com/dskl0qde4/image/upload/v1687689348/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAKUlEQVR42u3MwQAAAAgEsM6fIIE4g6jnBrBM16sIhUKhUCgUCoVC4c0CJuQyAeiNzJYAAAAASUVORK5CYII=';

const ProjectViews = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const params = useSearchParams();
  const id = params?.get('projectId');
  const labels = ['all', 'active', 'closed'];

  const project = projects.find((project) => project.id === id);

  // Get active projects
  const activeProjects = projects.filter(
    (project) => project.status === 'active'
  );

  // Get closed projects
  const closedProjects = projects.filter(
    (project) => project.status === 'inactive'
  );

  // Get current projects per page
  const getCurrentProjects = (data: Project[]) => {
    const indexOfLastProject = first + 1 * rows;
    const indexOfFirstProject = indexOfLastProject - rows;
    const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

    return currentProjects;
  };

  return (
    <>
      <TabMenu
        labels={labels}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setFirst={setFirst}
      />

      <section className="grid grid-cols-2">
        <div className="min-h-[calc(100vh-176px)] border-e-2 p-8">
          {activeTab === 0 && (
            <AllProjects
              projects={getCurrentProjects(projects)}
              rows={rows}
              totalProjects={projects.length}
              first={first}
              setFirst={setFirst}
              setRows={setRows}
            />
          )}{' '}
          {activeTab === 1 && (
            <ActiveProjects
              projects={getCurrentProjects(activeProjects)}
              rows={rows}
              totalProjects={activeProjects.length}
              first={first}
              setFirst={setFirst}
              setRows={setRows}
            />
          )}
          {activeTab === 2 && (
            <ClosedProjects
              projects={getCurrentProjects(closedProjects)}
              rows={rows}
              totalProjects={closedProjects.length}
              first={first}
              setFirst={setFirst}
              setRows={setRows}
            />
          )}
        </div>
        <div className="project_details p-8">
          {project ? (
            <ProjectDetails project={project} />
          ) : (
            <>
              <div className="mx-auto h-[300px] w-[300px]">
                <Image
                  loader={imageLoader}
                  src="Sandy_Tech-22_Single-09_tvpmb1.jpg"
                  alt="Kwasi Baayeh"
                  width={300}
                  height={300}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="rounded-full"
                />
              </div>
              <p className="mt-6 text-center text-gray-500">
                Select a project to see its details
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectViews;
