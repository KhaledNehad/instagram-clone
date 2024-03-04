import {View, Text, Image} from 'react-native';
import styles from './styles';

import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Comment from '../Comment';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {IPost} from '../../lib/types';

import {formatDistance, subDays} from 'date-fns';

export default function Post({post}: {post: IPost}) {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderUser}>
          <Image
            source={{
              uri: post.user.avatar,
            }}
            style={styles.avatar}
          />
          <Text style={styles.postHeaderUsername}>{post.user.username}</Text>
        </View>
        <View style={styles.postHeaderMenu}>
          <Antdesign
            name="ellipsis1"
            size={fonts.size.md}
            color={colors.text}
          />
        </View>
      </View>
      <View style={styles.postContent}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.postImage}
        />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.iconContainer}>
          <Antdesign
            name="hearto"
            size={fonts.size.md}
            color={colors.text}
            style={styles.icon}
          />
          <Ionicons
            name="chatbubble-outline"
            size={fonts.size.md}
            color={colors.text}
            style={styles.icon}
          />
          <Feather
            name="send"
            size={fonts.size.md}
            color={colors.text}
            style={styles.icon}
          />
          <Feather
            name="bookmark"
            size={fonts.size.md}
            color={colors.text}
            style={styles.bookmarkIcon}
          />
        </View>
      </View>
      <View style={styles.postInfo}>
        <View style={styles.likesInfo}>
          <Text style={styles.text}>
            Liked by{' '}
            <Text style={{fontWeight: fonts.weight.bold}}>
              {post.likes[0].user.username}
            </Text>{' '}
            and{' '}
            <Text style={{fontWeight: fonts.weight.bold}}>
              {post.likes.length - 1} others
            </Text>
          </Text>
        </View>
        <View style={styles.captionInfo}>
          <Text style={styles.text} numberOfLines={3}>
            <Text style={{fontWeight: fonts.weight.bold}}>
              {post.user.username}
            </Text>{' '}
            {post.caption}
          </Text>
        </View>
        <View style={styles.commentsInfo}>
          <Text style={styles.TotalComments}>
            View all {post.comments.length} comments
          </Text>

          <View style={styles.comments}>
            {post.comments
              .map(comment => (
                <Comment
                  key={comment.id}
                  username={comment.user.username}
                  text={comment.text}
                />
              ))
              .slice(0, 2)}
          </View>
        </View>

        <Text style={styles.timeInfo}>
          {formatDistance(subDays(new Date(post.postedAt), 0), new Date())} ago
        </Text>
      </View>
    </View>
  );
}
