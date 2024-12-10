import React from 'react';
import { Play, Square, RotateCcw } from 'lucide-react';

const ControlPanel: React.FC = () => {
  const [status, setStatus] = React.useState<'运行中' | '已停止' | '异常'>('已停止');

  const handleStart = () => setStatus('运行中');
  const handleStop = () => setStatus('已停止');
  const handleReset = () => {
    setStatus('已停止');
    // Add reset logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">系统控制</h2>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleStart}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
        >
          <Play className="mr-2" size={16} />
          启动
        </button>
        <button
          onClick={handleStop}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
        >
          <Square className="mr-2" size={16} />
          停止
        </button>
        <button
          onClick={handleReset}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700"
        >
          <RotateCcw className="mr-2" size={16} />
          重置
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">系统状态:</span>
        <span
          className={`px-2 py-1 text-sm rounded-full ${
            status === '运行中'
              ? 'bg-green-100 text-green-800'
              : status === '已停止'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export default ControlPanel;