'use client';

import React from 'react';
import BoardView from './board-view/BoardView';
import ListView from './list-view/ListView';

interface TabContentProps {
  activeTab: number;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <>
      {activeTab === 0 && <ListView />}
      {activeTab === 1 && <BoardView />}
    </>
  );
};

export default TabContent;
