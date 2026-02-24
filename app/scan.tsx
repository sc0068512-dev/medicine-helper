import { View, Text } from 'react-native';

export default function ScanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        📷 Camera will scan expiry here
      </Text>

      <Text style={{ marginTop: 10 }}>
        (Next step: OCR & date detection)
      </Text>
    </View>
  );
}
