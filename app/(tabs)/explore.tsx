import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image, View} from 'react-native';
import {Text} from '../components';
export default function TabTwoScreen() {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
