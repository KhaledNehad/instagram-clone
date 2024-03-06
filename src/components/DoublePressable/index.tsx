import React, { ReactNode } from 'react';
import { Pressable } from 'react-native';

interface IDoublePressProps {
  onDoublePress?: () => void;
  children?: ReactNode;
}

const DoublePress = ({
  onDoublePress = () => {},
  children,
}: IDoublePressProps) => {
  let lastTap = 0;

  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={handleDoubleTap}>{children}</Pressable>;
};

export default DoublePress;
