import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [medicine, setMedicine] = useState('');
  const router = useRouter();

  return (
    <View style={{ flex:1, justifyContent:'center', padding:20 }}>
      
      <Text style={{ fontSize:22, fontWeight:'bold', marginBottom:20 }}>
        Medicine Helper
      </Text>

      <TextInput
        placeholder="Enter medicine name"
        value={medicine}
        onChangeText={setMedicine}
        style={{
          borderWidth:1,
          padding:12,
          borderRadius:8,
          marginBottom:15
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor:'black',
          padding:15,
          borderRadius:8,
          alignItems:'center'
        }}
        onPress={() => router.push({
          pathname: '/explore',
          params: { name: medicine }
        })}
      >
        <Text style={{ color:'white' }}>Search</Text>
      </TouchableOpacity>

    </View>
  );
}
