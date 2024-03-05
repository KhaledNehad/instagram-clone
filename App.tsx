import {StyleSheet, SafeAreaView} from 'react-native';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
