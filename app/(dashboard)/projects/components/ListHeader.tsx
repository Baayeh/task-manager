'use client';

const ListHeader = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-semibold">{title}</h1>
      {children}
    </div>
  );
};

export default ListHeader;
