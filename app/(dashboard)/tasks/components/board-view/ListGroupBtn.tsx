'use client';

import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const ListGroupBtn = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-md border border-dashed border-orange-500 p-14 text-orange-500"
    >
      <span>
        <IoMdAdd />
      </span>
    </button>
  );
};

export default ListGroupBtn;
