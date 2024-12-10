import React from 'react';
import type { SensorData } from '../types';

const SensorPanel: React.FC = () => {
  const [sensorData] = React.useState<SensorData>({
    camera: 'https://images.unsplash.com/photo-1700336447439-3c4249ab2c3e',
    lidar: 'https://images.unsplash.com/photo-1700241793541-e68c80bf98b8',
    battery: { percentage: 85, charging: false },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium mb-2">摄像头</h3>
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={sensorData.camera}
            alt="Camera Feed"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-medium mb-2">激光雷达</h3>
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={sensorData.lidar}
            alt="LIDAR Visualization"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SensorPanel;