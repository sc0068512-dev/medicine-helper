import { View, Text, StyleSheet, Button, Alert, Platform } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { medicines } from "../../src/utils/data/medicines";
import {
  scheduleMedicineReminder,
  cancelAllReminders,
} from "../../src/utils/reminder";

type Medicine = {
  use: string;
  dose: string;
  expiry: string;
  reminder?: boolean;
};

export default function ExploreScreen() {
  const { name } = useLocalSearchParams<{ name?: string }>();

  if (!name) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No medicine selected</Text>
      </View>
    );
  }

  const medicine = medicines[name.toLowerCase() as keyof typeof medicines] as
    | Medicine
    | undefined;

  if (!medicine) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Medicine not found</Text>
      </View>
    );
  }

  const handleReminderOn = async () => {
    if (Platform.OS === "web") {
      Alert.alert("Web Support", "Notifications web par support nahi karti");
      return;
    }

    await scheduleMedicineReminder(10); // 10 seconds demo
    Alert.alert("Reminder ON", "Medicine reminder set successfully");
  };

  const handleReminderOff = async () => {
    if (Platform.OS === "web") return;

    await cancelAllReminders();
    Alert.alert("Reminder OFF", "All medicine reminders removed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name.toUpperCase()}</Text>

      <Text style={styles.label}>Use:</Text>
      <Text>{medicine.use}</Text>

      <Text style={styles.label}>Dose:</Text>
      <Text>{medicine.dose}</Text>

      <Text style={styles.label}>Expiry:</Text>
      <Text>{medicine.expiry}</Text>

      <View style={styles.reminderBox}>
        <Text style={styles.label}>Reminder:</Text>

        <Text style={{ color: "green", marginBottom: 8 }}>
          Manual reminder available
        </Text>

        <Button title="Reminder ON" onPress={handleReminderOn} />
        <View style={{ height: 10 }} />
        <Button title="Reminder OFF" onPress={handleReminderOff} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    fontWeight: "bold",
  },
  reminderBox: {
    marginTop: 20,
  },
  error: {
    fontSize: 18,
    color: "red",
  },
});