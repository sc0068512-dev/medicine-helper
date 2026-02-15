import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ExploreScreen() {
  const { name } = useLocalSearchParams();

  const medicineInfo: any = {
    paracetamol: {
      use: 'Fever & pain relief',
      dose: '1 tablet after food',
      expiry: 'Usually 2 years from manufacture',
    },
    aspirin: {
      use: 'Pain relief',
      dose: 'As prescribed',
      expiry: '18–24 months',
    },
  };

 const medicineName =
  typeof name === 'string'
    ? name.trim().toLowerCase()
    : Array.isArray(name)
    ? name[0].trim().toLowerCase()
    : '';

const data = medicineInfo[medicineName];


  return (
    <View style={{ flex:1, padding:20, justifyContent:'center' }}>
      
      <Text style={{ fontSize:22, fontWeight:'bold', marginBottom:10 }}>
        Medicine Search Result
      </Text>

      <Text style={{ fontSize:18 }}>
        You searched for:
      </Text>

      <Text style={{ fontSize:24, color:'green', marginBottom:20 }}>
        {name}
      </Text>

      {data ? (
        <>
          <Text style={{ fontSize:18 }}>
            Use: {data.use}
          </Text>

          <Text style={{ fontSize:18 }}>
            Dose: {data.dose}
          </Text>

          <Text style={{ fontSize:18, marginTop:10 }}>
            Expiry: {data.expiry}
          </Text>
        </>
      ) : (
        <Text style={{ color:'red', fontSize:18 }}>
          Medicine not found
        </Text>
      )}

    </View>
  );
}
