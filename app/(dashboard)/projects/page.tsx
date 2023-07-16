import { Metadata } from 'next';
import React from 'react';
import { ProjectViews } from './components';

export const metadata: Metadata = {
  title: 'Projects',
};

const page = () => {
  return (
    <>
      <ProjectViews />
    </>
  );
};

export default page;
