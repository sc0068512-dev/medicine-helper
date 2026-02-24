import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

/**
 * REQUIRED for SDK 54
 */
Notifications.setNotificationHandler({
  handleNotification: async (): Promise<Notifications.NotificationBehavior> => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true, // ✅ NEW
    shouldShowList: true,   // ✅ NEW
  }),
});

export async function scheduleMedicineReminder() {
  // web par notifications avoid
  if (Platform.OS === "web") return;

  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    throw new Error("Permission not granted");
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "💊 Medicine Reminder",
      body: "Time to take your medicine",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 10,
      repeats: false,
    },
  });
}

export async function cancelAllReminders() {
  if (Platform.OS === "web") return;
  await Notifications.cancelAllScheduledNotificationsAsync();
}