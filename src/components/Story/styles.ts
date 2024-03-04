import {StyleSheet} from 'react-native';

import colors from '../../theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  story: {
    width: 70,
    height: 70,
    backgroundColor: colors.primary,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.primary,
    margin: 5,
  },
});
