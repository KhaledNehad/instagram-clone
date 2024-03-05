import {Image, View} from 'react-native';
import styles from './styles';
import {IStory} from '../../lib/types';

interface IStoryProps {
  story: IStory;
}

const Story = ({story}: IStoryProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: story.image,
        }}
        style={styles.story}
      />
    </View>
  );
};

export default Story;
