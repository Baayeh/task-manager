'use client';

import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  type: 'submit' | 'button';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  type,
  icon: Icon,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:border-orange-500 transition w-full
    ${
      outline
        ? 'bg-[#e5edea] border-[#252727] text-[#252727] hover:text-orange-600'
        : 'bg-orange-600 hover:bg-orange-500 border-orange-600 text-[#e5edea]'
    }
    ${
      small
        ? 'text-sm py-1 font-light border-[1px]'
        : 'text-md py-3 font-semibold border-2'
    }
    `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
