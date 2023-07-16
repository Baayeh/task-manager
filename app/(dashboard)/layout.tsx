import Header from './components/Header';
import Sidebar from './components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="dashboard-layout" className="relative">
      <Sidebar />
      <main className="ml-[20%] w-[80%]">
        <Header />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
