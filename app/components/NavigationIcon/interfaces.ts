import {GestureResponderEvent} from 'react-native';
import {Feather} from '@expo/vector-icons';

export interface NavigationIconProps {
  onPress: (event: GestureResponderEvent) => void;
  name?: keyof typeof Feather.glyphMap;
}
