'use client';

import TabMenu from '@app/(dashboard)/components/TabMenu';
import { useState } from 'react';
import TabContent from './TabContent';

const TaskContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const labels = ['list', 'board'];

  return (
    <>
      <TabMenu
        labels={labels}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent activeTab={activeTab} />
    </>
  );
};
export default TaskContainer;
