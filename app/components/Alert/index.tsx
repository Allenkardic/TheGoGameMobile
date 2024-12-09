import {Alert as RNAlert, Platform} from 'react-native';
import AlertOptionIProps from './interfaces';

// Define the polyfill function with proper types
const alertPolyfill = (
  title: string | undefined,
  description: string | undefined,
  options: AlertOptionIProps[] = [],
  extra?: any,
): void => {
  const result = window.confirm(
    [title, description].filter(Boolean).join('\n'),
  );

  if (result) {
    const confirmOption = options.find(({style}) => style !== 'cancel');
    confirmOption?.onPress?.();
  } else {
    const cancelOption = options.find(({style}) => style === 'cancel');
    cancelOption?.onPress?.();
  }
};

// Conditional assignment based on platform
const Alert: typeof RNAlert.alert =
  Platform.OS === 'web' ? alertPolyfill : RNAlert.alert;

export default Alert;
