import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  ...atributs
}: Readonly<IProps>) {
  return (
    <button
      className={twMerge(`rounded-md transition bg-slate-100 px-4 py-2 text-slate-800 cursor-pointer mt-5
        shadow-sm border border-transparent
        dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:shadow-sm
        hover:bg-slate-200 dark:hover:bg-slate-600
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white
        dark:focus:ring-offset-slate-800
        disabled:bg-slate-200 disabled:text-slate-400
        dark:disabled:bg-slate-800 dark:disabled:text-slate-500
        ${className}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `)}
      onClick={onClick}
      disabled={disabled}
      {...atributs}
    >
      {children}
    </button>
  );
}
