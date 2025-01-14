import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-psemibold">E_Library</Text>
      <Link href={"/home"}>Go to home</Link>
      <StatusBar style="auto" />
    </View>
  );
}
