import React from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className={value === index ? 'block' : 'hidden'}
    >
      {value === index && children}
    </div>
  );
}

export default TabPanel;