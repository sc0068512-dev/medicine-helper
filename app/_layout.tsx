import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    // 🚫 Notifications abhi disable hain (Expo Go + SDK 53 issue)
    if (Platform.OS !== "web") {
      console.log("Notifications disabled for now. Will enable in Dev Build.");
    }
  }, []);

  return <Stack />;
}