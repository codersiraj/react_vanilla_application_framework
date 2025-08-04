import { ReactNode, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ThemePicker from '../components/ThemePicker';

interface LayoutProps {
  children: ReactNode;
  onLogout: () => void;
}

export default function Layout({ children, onLogout }: LayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setMobileSidebarOpen((prev) => !prev);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <div className="h-screen flex flex-col">
      {/* Example: put theme picker above header */}
      <div className="absolute top-2 right-4 z-50"><ThemePicker /></div>
      <Header
        onLogout={onLogout}
        onMenuClick={toggleSidebar}
        collapsed={collapsed}
        onCollapseToggle={toggleCollapse}
      />
      <div className="flex flex-1 pt-16">
        <aside
          className={`fixed md:relative top-16 md:top-0 left-0 h-[calc(100vh-4rem)] z-40 bg-hrms-sidebar text-white transition-all duration-300
            ${collapsed ? 'md:w-20' : 'md:w-64'} w-64
            ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <Sidebar collapsed={collapsed} />
        </aside>
        <main
          className={`flex-1 overflow-y-auto p-6 bg-hrms-background text-hrms-text-primary transition-all duration-300 ${
            collapsed ? '' : ''
          } ml-0`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
