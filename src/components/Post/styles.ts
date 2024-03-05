import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  post: {
    flex: 1,
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  postHeaderUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postHeaderUsername: {
    color: colors.text,
    fontSize: fonts.size.sm,
    marginLeft: 10,
    fontWeight: fonts.weight.bold,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postHeaderMenu: {
    padding: 10,
    marginLeft: 'auto',
  },
  postFooter: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  postContent: {},
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  bookmarkIcon: {
    marginLeft: 'auto',
  },
  text: {
    color: colors.text,
    marginVertical: 3,
  },
  postInfo: {
    padding: 10,
  },
  likesInfo: {
    marginBottom: 0,
  },
  TotalComments: {
    color: colors.gray,
    marginBottom: 5,
  },
  captionInfo: {
    marginBottom: 5,
  },
  commentsInfo: {
    marginBottom: 0,
  },
  comments: {
    marginBottom: 0,
  },
  timeInfo: {
    color: colors.gray,
  },
});
