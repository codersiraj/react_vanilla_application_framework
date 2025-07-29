// -------- SocialLoginButton.tsx --------
// src/components/SocialLoginButton.tsx
import React from 'react';

interface SocialLoginButtonProps {
  provider: 'google' | 'github';
  onClick: () => void;
}

const styles = {
  google: 'bg-red-600 text-white',
  github: 'bg-gray-800 text-white',
};

export default function SocialLoginButton({ provider, onClick }: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      className={`flex-1 py-2 rounded ${styles[provider]}`}
      onClick={onClick}
    >
      {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
  );
}