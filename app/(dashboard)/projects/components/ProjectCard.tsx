'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RxDotFilled } from 'react-icons/rx';

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

const ProjectCard = () => {
  return (
    <Link href="/dashboard/projects/1">
      <div className="project_card flex items-center justify-between rounded-md bg-[#e5edea] p-4">
        <div className="flex items-center gap-x-3">
          <div className="flex h-[3rem] w-[3rem] flex-col items-center justify-center rounded-full bg-white font-bold">
            Z
          </div>
          <div>
            <h2 className="font-bold">Zara</h2>
            <p className="flex items-center gap-x-1 text-sm text-gray-500">
              <span>13 tasks</span>
              <span>
                <RxDotFilled />
              </span>
              <span>4 overdue</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-12">
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
                className="absolute left-0 top-0 translate-x-[10px] rounded-full border"
              />
            </div>
            <div className="profile-img overflow-hidden">
              <Image
                loader={imageLoader}
                src="profile_pic_eviqtl.jpg"
                alt="Kwasi Baayeh"
                width={20}
                height={20}
                loading="lazy"
                className="absolute left-0 top-0 translate-x-[20px] rounded-full border"
              />
            </div>
          </div>

          {/* time frame */}
          <p className="time_frame ml-2 text-xs">
            <span>Jul 2 </span>-<span> Jul 16</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
