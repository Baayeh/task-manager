'use client';

import { useEffect, useState } from 'react';

interface ProgressProviderProps {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => JSX.Element;
}

const ProgressProvider: React.FC<ProgressProviderProps> = ({
  valueStart,
  valueEnd,
  children,
}) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default ProgressProvider;
