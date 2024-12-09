export interface AlertOptionIProps {
  text?: string;
  onPress?: () => void;
  style?: "default" | "cancel" | "destructive";
}
