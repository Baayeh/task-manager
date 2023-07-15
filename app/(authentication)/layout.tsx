import ToasterProvider from '@libs/ToasterProvider';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-7 h-screen">
      <div className="col-span-2 border-e bg-orange-600 grid place-content-center">
        Banner goes here
      </div>
      <div className="col-span-5 grid place-content-center">{children}</div>
      <ToasterProvider />
    </main>
  );
};

export default AuthLayout;
