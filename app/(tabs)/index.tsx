import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';

// import { useGetData } from "@/hooks/useGetData";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>hell</Text>
    </SafeAreaView>
  );
}

const useStyles = (props: {loading: boolean}) =>
  StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: props.loading ? 8 : 10,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
