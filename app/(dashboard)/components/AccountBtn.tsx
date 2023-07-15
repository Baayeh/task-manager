'use client';

import Image from 'next/image';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { FaCaretUp } from 'react-icons/fa';

const imageLoader = ({ src, width, quality }: ImageLoader) => {
  return `https://res.cloudinary.com/dskl0qde4/image/upload/v1683909385/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAKUlEQVR42u3MwQAAAAgEsM6fIIE4g6jnBrBM16sIhUKhUCgUCoVC4c0CJuQyAeiNzJYAAAAASUVORK5CYII=';

const AccountBtn = () => {
  const menu = useRef<Menu>(null);

  const items: MenuItem[] = [
    {
      label: 'Account Settings',
      icon: 'pi pi-fw pi-cog',
      command: () => {
        console.log('Account Settings');
      },
    },
    {
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        console.log('Logout');
        toast.success('Logged out successfully');
      },
    },
  ];

  return (
    <>
      <button
        type="button"
        title="user profile"
        className="flex items-center gap-x-3 rounded-md px-6 py-3"
        onClick={(e) => menu.current?.toggle(e)}
        aria-controls="account-menu"
        aria-haspopup
      >
        <div className="profile-img overflow-hidden">
          <Image
            loader={imageLoader}
            src="profile_pic_eviqtl.jpg"
            alt="Kwasi Baayeh"
            width={40}
            height={40}
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="rounded-full"
          />
        </div>
        <div className="text-start text-sm">
          <h3>Kwasi Baayeh</h3>
          <p className="text-xs text-gray-400">Software Developer</p>
        </div>
        <span>
          <FaCaretUp />
        </span>
      </button>
      <Menu
        ref={menu}
        popup
        model={items}
        id="account-menu"
        className="bg-slate-500/40"
        aria-hidden="true"
      />
    </>
  );
};
export default AccountBtn;
