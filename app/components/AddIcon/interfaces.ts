import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export default interface AddIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
}
