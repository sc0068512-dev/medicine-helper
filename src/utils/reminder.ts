import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function requestNotificationPermission() {
  if (Platform.OS === "web") return;

  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    await Notifications.requestPermissionsAsync();
  }
}

export async function scheduleMedicineReminder(seconds: number = 10) {
  if (Platform.OS === "web") return;

  await requestNotificationPermission();

  const trigger = {
    seconds,
    repeats: false,
  } as Notifications.TimeIntervalTriggerInput; // ✅ MAIN FIX

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Medicine Reminder 💊",
      body: "Time to take your medicine",
    },
    trigger,
  });
}

export async function cancelAllReminders() {
  if (Platform.OS === "web") return;

  await Notifications.cancelAllScheduledNotificationsAsync();
}