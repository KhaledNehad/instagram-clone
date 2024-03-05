import {View, FlatList} from 'react-native';
import React from 'react';
import FeedPost from '../../components/FeedPost';
import Story from '../../components/Story';
import stories from '../../assets/data/stories.json';

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => <Story story={item} />}
        showsHorizontalScrollIndicator={false}
      />
      <FeedPost />
    </View>
  );
}
