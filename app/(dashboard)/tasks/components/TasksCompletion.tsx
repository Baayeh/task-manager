'use client';

import { useState } from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import ProgressProvider from './ProgressProvider';

const TasksCompletion = () => {
  const [valueEnd] = useState(80);

  return (
    <div className="col-span-2 flex flex-col items-center justify-center gap-y-5 rounded-md border p-2 shadow">
      <h1 className="font-bold">Tasks Completed</h1>
      <div className="mx-auto h-[10rem] w-[10rem]">
        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
          {(value) => (
            <CircularProgressbarWithChildren
              value={value}
              strokeWidth={3}
              counterClockwise={true}
              styles={buildStyles({
                pathColor: '#FF7A50',
              })}
            >
              <span className="text-5xl">80%</span>
              <span className="text-sm text-gray-400">completed</span>
            </CircularProgressbarWithChildren>
          )}
        </ProgressProvider>
      </div>
      <div className="text-center">
        <h3 className="text-sm font-bold">You&apos;re doing good!</h3>
        <p className="text-xs text-gray-500">You almost reached your goal.</p>
      </div>
    </div>
  );
};
export default TasksCompletion;
