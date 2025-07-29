import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, User, Settings } from 'lucide-react';

export default function Sidebar({ collapsed = false }: { collapsed?: boolean }) {
  const iconSize = 20;
  const navClass = collapsed
    ? "flex flex-col items-center space-y-6 p-3"
    : "space-y-2 p-6";

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-x-3 px-3 py-2 rounded transition-colors duration-1000 ${
      isActive
        ? 'font-bold text-hrms-accent bg-white bg-opacity-10'
        : 'hover:bg-white hover:bg-opacity-5'
    }`;

  const labelClass = collapsed
    ? "max-w-0 opacity-0 pointer-events-none transition-all duration-1000 overflow-hidden"
    : "max-w-[120px] opacity-100 transition-all duration-700 overflow-hidden";

  return (
    <nav className={navClass}>
      <NavLink to="/" className={linkClasses}>
        <LayoutDashboard size={iconSize} />
        <span className={labelClass}>Dashboard</span>
      </NavLink>
      <NavLink to="/users" className={linkClasses}>
        <Users size={iconSize} />
        <span className={labelClass}>Users</span>
      </NavLink>
      <NavLink to="/profile" className={linkClasses}>
        <User size={iconSize} />
        <span className={labelClass}>Profile</span>
      </NavLink>
      <NavLink to="/settings" className={linkClasses}>
        <Settings size={iconSize} />
        <span className={labelClass}>Settings</span>
      </NavLink>
    </nav>
  );
}
