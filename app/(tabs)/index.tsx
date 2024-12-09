import { Image, StyleSheet, View } from "react-native";
import { Text } from "@/app/components";
import { HelloWave } from "@/app/components/HelloWave";
import ParallaxScrollView from "@/app/components/ParallaxScrollView";
import { ThemedText } from "@/app/components/ThemedText";
import { ThemedView } from "@/app/components/ThemedView";

export default function HomeScreen() {
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
    position: "absolute",
  },
});
