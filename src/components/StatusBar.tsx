import React from 'react';
import { Battery } from 'lucide-react';

const StatusBar: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = React.useState(85);

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Battery className="text-gray-600" />
        <span className="text-sm text-gray-600">电池电量: {batteryLevel}%</span>
        <div className="w-24 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${batteryLevel}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default StatusBar;