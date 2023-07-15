'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';

interface TaskCardProps {
  id: string;
  title: string;
  priority: string;
  active: boolean;
}

const imageLoader = ({ src, width, quality }: ImageLoader) => {
  return `https://res.cloudinary.com/dskl0qde4/image/upload/v1683909385/${src}?w=${width}&q=${
    quality || 75
  }`;
};
const imageLoader1 = ({ src, width, quality }: ImageLoader) => {
  return `https://res.cloudinary.com/dskl0qde4/image/upload/v1677944884/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const blurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAAKUlEQVR42u3MwQAAAAgEsM6fIIE4g6jnBrBM16sIhUKhUCgUCoVC4c0CJuQyAeiNzJYAAAAASUVORK5CYII=';

const TaskCard: React.FC<TaskCardProps> = ({ id, title, priority, active }) => {
  const [isOpen, setIsOpen] = useState(active);

  return (
    <div className={`${isOpen ? 'active' : ''} task_card rounded-md p-4`}>
      <div className="task_header">
        <p className="text-xs text-gray-400">{id}</p>
        <h2 className="task_title font-bold">{title}</h2>
      </div>
      <p className="task_desc my-3 text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deserunt.
        Ullam excepturi ea quaerat. Animi voluptates accusamus dicta!
      </p>

      <div className="task_actions mt-7 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          {/* priority badge */}
          <span className="rounded bg-orange-200 px-3 py-1 text-xs text-gray-500">
            {priority}
          </span>

          {/* collaborators */}
          <div className="collaborators relative">
            <div className="profile-img h-5 w-5 overflow-hidden">
              <Image
                loader={imageLoader}
                src="profile_pic_eviqtl.jpg"
                alt="Kwasi Baayeh"
                width={20}
                height={20}
                loading="lazy"
                blurDataURL={blurDataURL}
                className="absolute left-0 top-0 rounded-full border"
              />
            </div>
            <div className="profile-img overflow-hidden">
              <Image
                loader={imageLoader1}
                src="pexels-pavel-danilyuk-5998474_ah5yfr.jpg"
                alt="Kwasi Baayeh"
                width={20}
                height={20}
                loading="lazy"
                blurDataURL={blurDataURL}
                className="absolute left-0 top-0 translate-x-[10px] rounded-full border"
              />
            </div>
          </div>

          {/* time frame */}
          <p className="time_frame ml-2 text-xs">
            <span>Jul 2 </span>-<span> Jul 16</span>
          </p>
        </div>

        <button
          type="button"
          className="rounded-full transition-colors duration-300 ease-in-out hover:bg-slate-500/40"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {isOpen ? <RxCaretUp size={30} /> : <RxCaretDown size={30} />}
          </span>
        </button>
      </div>
    </div>
  );
};
export default TaskCard;
