import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { medicines } from "../../src/utils/data/medicines";
import {
  scheduleMedicineReminder,
  cancelAllReminders,
} from "../../src/utils/reminder";

export default function ExploreScreen() {
  const { name } = useLocalSearchParams<{ name?: string }>();

  if (!name) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No medicine selected</Text>
      </View>
    );
  }

  const key = name.trim().toLowerCase();
  const medicine = medicines[key as keyof typeof medicines];

  if (!medicine) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Medicine not found</Text>
      </View>
    );
  }

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
        <Button
          title="Reminder ON"
          onPress={async () => {
            try {
              await scheduleMedicineReminder();
              Alert.alert("Success", "Reminder set");
            } catch {
              Alert.alert("Error", "Permission denied");
            }
          }}
        />

        <View style={{ height: 10 }} />

        <Button
          title="Reminder OFF"
          onPress={async () => {
            await cancelAllReminders();
            Alert.alert("Removed", "All reminders cancelled");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  label: { marginTop: 10, fontWeight: "bold" },
  reminderBox: { marginTop: 20 },
  error: { color: "red", fontSize: 18 },
});