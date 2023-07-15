'use client';

import { BiSearchAlt } from 'react-icons/bi';

const SearchBtn = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-x-2 bg-white px-4 py-2 rounded-full w-[20rem] transition duration-300 ease-in-out border border-white hover:text-gray-700 hover:border-gray-200"
    >
      <span>
        <BiSearchAlt size={20} />
      </span>
      <span>Search</span>
    </button>
  );
};
export default SearchBtn;
