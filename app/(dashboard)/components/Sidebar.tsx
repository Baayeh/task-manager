import getCurrentUser from '@actions/getCurrentUser';
import { SiHelpscout } from 'react-icons/si';
import AccountBtn from './AccountBtn';
import Navigation from './Navigation';

const Sidebar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <section
      data-role="sidebar"
      className="fixed h-screen w-[20%] bg-[#252727] px-6 text-[#E5EDEA]"
    >
      <div
        data-role="sidebar logo"
        className="flex items-center gap-x-2 py-12 pl-6 text-xl"
      >
        <span>
          <SiHelpscout />
        </span>
        <h1 className="font-semibold text-[#FF7A50]">
          Task<span className="text-[#E5EDEA]">Buddy</span>
        </h1>
      </div>
      <Navigation />
      <div className="absolute bottom-10">
        <AccountBtn currentUser={currentUser} />
      </div>
    </section>
  );
};
export default Sidebar;
