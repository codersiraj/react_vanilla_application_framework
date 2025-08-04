// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`bg-hrms-accent hover:bg-hrms-hover text-hrms-buttontext py-2 px-4 rounded ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}