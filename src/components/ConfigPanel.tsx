import React from 'react';
import { Save } from 'lucide-react';
import type { VoiceConfig } from '../types';

interface ConfigPanelProps {
  title: string;
  config: VoiceConfig;
  onSave: (config: VoiceConfig) => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ title, config, onSave }) => {
  const [localConfig, setLocalConfig] = React.useState(config);
  const [saveStatus, setSaveStatus] = React.useState<string | null>(null);

  const handleSave = () => {
    onSave(localConfig);
    setSaveStatus('保存成功');
    setTimeout(() => setSaveStatus(null), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">唤醒词</label>
          <input
            type="text"
            value={localConfig.wake_word}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, wake_word: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            声卡设备标识符
          </label>
          <input
            type="text"
            value={localConfig.sound_card_id}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, sound_card_id: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">发音人</label>
          <input
            type="text"
            value={localConfig.speaker_id}
            onChange={(e) =>
              setLocalConfig({ ...localConfig, speaker_id: e.target.value })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handleSave}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Save className="mr-2" size={16} />
          确认
        </button>
        {saveStatus && (
          <span className="text-green-600 text-sm">{saveStatus}</span>
        )}
      </div>
    </div>
  );
}

export default ConfigPanel;