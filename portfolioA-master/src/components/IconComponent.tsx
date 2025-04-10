// src/components/IconComponent.tsx
import React from 'react';
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
}

const IconComponent: React.FC<IconProps> = ({ icon: Icon, className }) => {
  // Use createElement instead of JSX to avoid TypeScript errors
  return React.createElement(Icon as React.ComponentType<{ className?: string }>, { className });
};

export default IconComponent;




