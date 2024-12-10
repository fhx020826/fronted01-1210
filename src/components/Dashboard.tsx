import React from 'react';
import ConfigPanel from './ConfigPanel';
import SensorPanel from './SensorPanel';
import ControlPanel from './ControlPanel';
import TabPanel from './TabPanel';
import type { VoiceConfig } from '../types';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const initialConfig: VoiceConfig = {
    wake_word: '你好',
    sound_card_id: 'default',
    speaker_id: 'speaker_1',
  };

  const handleSaveConfig = (config: VoiceConfig) => {
    console.log('Saving config:', config);
  };

  const tabs = [
    { label: '系统状态', icon: '📊' },
    { label: '配置管理', icon: '⚙️' },
    { label: '传感器数据', icon: '📷' },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] overflow-hidden">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center px-6 py-3 text-sm font-medium ${
              activeTab === index
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 h-full overflow-auto">
        <TabPanel value={activeTab} index={0}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ControlPanel />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">系统信息</h2>
              <div className="space-y-2">
                <p>CPU使用率: 45%</p>
                <p>内存使用: 2.5GB / 8GB</p>
                <p>运行时间: 2小时35分钟</p>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ConfigPanel
              title="语音交互模块配置"
              config={initialConfig}
              onSave={handleSaveConfig}
            />
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">传感器模块配置</h2>
                <p className="text-gray-500">传感器模块配置内容</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">任务规划模块配置</h2>
                <p className="text-gray-500">任务规划模块配置内容</p>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel value={activeTab} index={2}>
          <SensorPanel />
        </TabPanel>
      </div>
    </div>
  );
}

export default Dashboard;