import React from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import StatusBar from './StatusBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1">
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Menu size={24} />
              </button>
              <StatusBar />
            </div>
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;