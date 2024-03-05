import {FlatList} from 'react-native';

import Post from '../Post';
import posts from '../../assets/data/posts.json';

export default function FeedPost() {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
