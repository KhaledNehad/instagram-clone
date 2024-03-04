import {StyleSheet, SafeAreaView} from 'react-native';

import FeedPost from './src/components/FeedPost';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedPost />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
