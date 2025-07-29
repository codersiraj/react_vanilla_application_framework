// src/pages/RegisterPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithIcon from '../components/InputWithIcon';
import Button from '../components/Button';
import SocialLoginButton from '../components/SocialLoginButton';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      return setMessage({ text: 'All fields are required.', type: 'error' });
    }

    if (password !== confirmPassword) {
      return setMessage({ text: 'Passwords do not match.', type: 'error' });
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u: any) => u.email === email);
    if (userExists) {
      return setMessage({ text: 'Email already registered.', type: 'error' });
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    setMessage({ text: 'Registration successful! Redirecting to login...', type: 'success' });
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-hrms-primary">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-xl font-semibold mb-4">Register</h2>

        {message && (
          <div className={`mb-4 text-sm ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {message.text}
          </div>
        )}

        <InputWithIcon
          icon={<User size={16} />}
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        <InputWithIcon
          icon={<Mail size={16} />}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <InputWithIcon
          icon={<Lock size={16} />}
          rightElement={
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <InputWithIcon
          icon={<Lock size={16} />}
          rightElement={
            <button type="button" onClick={() => setShowConfirm(prev => !prev)}>
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          type={showConfirm ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Button className="w-full mb-4" type="submit">Register</Button>

        <div className="flex gap-2">
          <SocialLoginButton provider="google" onClick={() => alert('Google login')} />
          <SocialLoginButton provider="github" onClick={() => alert('GitHub login')} />
        </div>
      </form>
    </div>
  );
}
