import { LogOut, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface HeaderProps {
    onLogout: () => void;
    onMenuClick: () => void;
    collapsed: boolean;
    onCollapseToggle: () => void;
}

export default function Header({
    onLogout,
    onMenuClick,
    collapsed,
    onCollapseToggle,
}: HeaderProps) {
    return (
        <header className="bg-hrms-primary shadow p-4 flex items-center justify-between fixed w-full top-0 z-50 text-white">
            {/* Left: Hamburger (mobile), Logo, Chevron (desktop) */}
            <div className="flex items-center gap-2 min-w-0">
                {/* Hamburger for mobile */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden font-bold p-0"
                    aria-label="Open sidebar"
                >
                    <Menu size={24} />
                </button>
                {/* Logo */}
                <img
                    src="/hrms_logo.svg"
                    alt="HRMS Logo"
                    className="h-8 md:h-10 w-auto object-contain"
                    style={{ maxWidth: 140 }}
                />
                {/* Chevron for desktop */}
                <button
                    onClick={onCollapseToggle}
                    className={`hidden md:flex items-center justify-center rounded-full bg-hrms-accent hover:bg-hrms-hover transition-colors w-6 h-6 ${collapsed ? 'ml-0' : 'ml-16'}`}
                    aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                    type="button"
                >
                    {collapsed
                        ? <ChevronRight size={20} className="text-white" />
                        : <ChevronLeft size={20} className="text-white" />}
                </button>
            </div>
            {/* Right: Logout */}
            <button
                onClick={onLogout}
                className="flex items-center gap-2 bg-hrms-accent hover:bg-hrms-hover text-white px-4 py-2 rounded transition-colors"
            >
                <LogOut size={18} className="text-white" />
                Logout
            </button>
        </header>
    );
}
