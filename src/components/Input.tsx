// -------- Input.tsx --------
// src/components/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full p-2 border rounded ${className}`.trim()}
      {...props}
    />
  );
}