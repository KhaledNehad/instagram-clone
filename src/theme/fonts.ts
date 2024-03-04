import {TextStyle} from 'react-native';

const size = {
  xl: 40,
  lg: 32,
  md: 24,
  sm: 16,
  xs: 12,
};

const weight: {
  [key: string]: TextStyle['fontWeight'];
} = {
  bold: 'bold',
  semiBold: '600',
  regular: '400',
  light: '300',
};

export default {size, weight};
