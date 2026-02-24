import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

type Reminder = {
  id: string;
  medicine: string;
  time: string;
};

export default function ReminderScreen() {
  const [medicine, setMedicine] = useState('');
  const [time, setTime] = useState('');
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const addReminder = () => {
    if (!medicine || !time) return;

    const newReminder: Reminder = {
      id: Date.now().toString(),
      medicine,
      time,
    };

    setReminders([...reminders, newReminder]);
    setMedicine('');
    setTime('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        ⏰ Medicine Reminder
      </Text>

      <TextInput
        placeholder="Medicine name"
        value={medicine}
        onChangeText={setMedicine}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Time (e.g. 8:00 AM)"
        value={time}
        onChangeText={setTime}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <TouchableOpacity
        onPress={addReminder}
        style={{
          backgroundColor: 'black',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={{ color: 'white' }}>Add Reminder</Text>
      </TouchableOpacity>

      <FlatList
        data={reminders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              borderWidth: 1,
              borderRadius: 8,
              marginBottom: 10,
            }}
          >
            <Text>💊 {item.medicine}</Text>
            <Text>⏰ {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}
