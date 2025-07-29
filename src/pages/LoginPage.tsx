// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, EyeOff, Eye } from 'lucide-react';
import InputWithIcon from '../components/InputWithIcon';
import Button from '../components/Button';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find((u: any) => u.email === email && u.password === password);

        if (!foundUser) {
            setError('Invalid email or password.');
            return;
        }

        if (rememberMe) {
            localStorage.setItem('auth', 'true');
        } else {
            sessionStorage.setItem('auth', 'true');
        }

        onLogin();
        navigate('/');
    };

    return (
        <div className="flex justify-center h-screen bg-hrms-primary">
            <div className="flex flex-col items-center w-full mt-40">
                {/* Logo centered above form */}
                <img
                    src="/hrms_logo.svg"
                    alt="HRMS Logo"
                    className="h-14 mb-6 mt-2"
                    style={{ maxWidth: 500 }}
                />
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-100 p-8 rounded shadow w-96 flex flex-col"
                >
                    <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
                    {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}
                    <InputWithIcon
                        icon={<Mail size={16} />}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative mb-4">
                        <InputWithIcon
                            icon={<Lock size={16} />}
                            rightElement={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            }
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="remember" className="text-sm">Remember Me</label>
                    </div>
                    <Button type="submit" className="w-full mb-4">Login</Button>
                    <p className="text-center text-sm text-gray-700">
                        Don't have an account?{" "}
                        <span
                            onClick={() => navigate('/register')}
                            className="text-[#ED8936] hover:underline cursor-pointer font-medium"
                        >
                            Register
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}
