// src/components/InputWithIcon.tsx
import React from 'react';

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
}

export default function InputWithIcon({ icon, rightElement, ...props }: InputWithIconProps) {
  return (
    <div className="relative mb-4">
      <div className="absolute top-2.5 left-2 w-4 h-4 text-gray-500">{icon}</div>
      {rightElement && (
        <div className="absolute top-2.5 right-2 text-sm text-blue-600">
          {rightElement}
        </div>
      )}
      <input
        className={`w-full pl-8 ${rightElement ? 'pr-16' : ''} p-2 border rounded`}
        {...props}
      />
    </div>
  );
}
