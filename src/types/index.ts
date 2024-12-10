export interface ModuleStatus {
  status: '运行中' | '已停止' | '异常';
  timestamp: string;
}

export interface VoiceConfig {
  wake_word: string;
  sound_card_id: string;
  speaker_id: string;
}

export interface SystemConfig {
  voiceConfig: VoiceConfig;
  sensorConfig: Record<string, unknown>;
  taskConfig: Record<string, unknown>;
  actionConfig: Record<string, unknown>;
}

export interface BatteryStatus {
  percentage: number;
  charging: boolean;
}

export interface SensorData {
  camera: string;
  lidar: string;
  battery: BatteryStatus;
}