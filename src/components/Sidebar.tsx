import React from 'react';
import { Star } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { id: 'voice', label: '语音交互' },
    { id: 'sensor', label: '传感数据' },
    { id: 'status', label: '状态监控' },
    { id: 'action', label: '动作生成' },
  ];

  return (
    <div
      className={`bg-yellow-200 h-screen transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0'
      } overflow-hidden`}
    >
      <div className="p-4">
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-yellow-300 cursor-pointer"
            >
              <Star className="text-gray-700" size={20} />
              <span className="text-gray-800">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;