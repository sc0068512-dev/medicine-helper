import { View, Text, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  useEffect(() => {
    if (!permission) requestPermission();
  }, []);

  if (!permission?.granted) {
    return (
      <View style={styles.center}>
        <Text>Camera permission required</Text>
      </View>
    );
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      barcodeScannerSettings={{
        barcodeTypes: ['ean13', 'ean8', 'qr'],
      }}
      onBarcodeScanned={({ data }) => {
        // barcode → medicine name mapping
        const map: Record<string, string> = {
          '8901138500022': 'paracetamol',
          '8901138500039': 'ibuprofen',
        };

        const medicine = map[data];
        if (medicine) {
          router.push(`/explore?name=${medicine}`);
        } else {
          alert('Medicine not found');
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
