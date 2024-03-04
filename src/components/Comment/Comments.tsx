import React from 'react';
import {View, Text} from 'react-native';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import Anteing from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Comment = ({username, text}: {username: string; text: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.commentText} numberOfLines={2}>
        <Text style={styles.username}>{username} </Text>
        {text}
      </Text>
      <Anteing
        name="hearto"
        size={fonts.size.sm}
        color={colors.text}
        style={styles.icon}
      />
    </View>
  );
};

export default Comment;
