const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="dashboard-layout" className="relative">
      <h1>Sidebar</h1>
      {/* <Sidebar /> */}
      <main className="ml-[20%] w-[80%]">
        {/* <Header /> */}
        <h1>Header</h1>
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
