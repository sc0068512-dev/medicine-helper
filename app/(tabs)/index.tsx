import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [medicine, setMedicine] = useState('');
  const router = useRouter();

  function searchMedicine(name: string) {
    if (!name) return;
    router.push({
      pathname: '/(tabs)/explore',
      params: { name },
    });
  }

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        Medicine Helper
      </Text>

      <TextInput
        placeholder="Enter medicine name"
        value={medicine}
        onChangeText={setMedicine}
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
          marginBottom: 15,
        }}
      />

      {/* SEARCH BUTTON */}
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
        onPress={() => searchMedicine(medicine)}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Search Medicine
        </Text>
      </TouchableOpacity>

      {/* SCAN BUTTON */}
      <TouchableOpacity
        style={{
          backgroundColor: '#444',
          padding: 15,
          borderRadius: 8,
        }}
        onPress={() => router.push('/(tabs)/scan')}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Scan Medicine
        </Text>
      </TouchableOpacity>
    </View>
  );
}
