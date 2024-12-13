import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CameraView, CameraType } from 'expo-camera';
import { Overlay } from '../../components/Overlay';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function scanner() {
  const router = useRouter();
  const { employeeID, packageIds, dataQR } = useLocalSearchParams();

  const [storageQR, setStorageQR] = useState([]);
  const [scanning, setScanning] = useState(true); // Control multiple scans

  useEffect(() => {
    initializeStorageQR();
  }, []);

  const initializeStorageQR = async () => {
    try {
      const existingData = await AsyncStorage.getItem('@QRDATA');
      if (existingData) {
        setStorageQR(JSON.parse(existingData));
      } else {
        setStorageQR([]);
        await AsyncStorage.setItem('@QRDATA', JSON.stringify([]));
      }
    } catch (error) {
      console.error('Error initializing storageQR:', error);
    }
  };

  const saveDataToStorage = async (data) => {
    try {
      const updatedQR = [...storageQR, data];
      setStorageQR(updatedQR);
      await AsyncStorage.setItem('@QRDATA', JSON.stringify(updatedQR));
    } catch (error) {
      console.error('Error saving data to storage:', error);
    }
  };

  const handleBarcodeScanned = async ({ data }) => {
    if (!scanning) return; // Prevent multiple scans
    setScanning(false);

    if (data === dataQR) {
      // Save data and redirect
      await saveDataToStorage(data);
      router.replace({
        pathname: '/checkQR',
        params: { employeeID, packageIds },
      });
    } else {
      // Redirect without saving
      alert('Scanned QR does not match the expected data.');
      router.replace({
        pathname: '/checkQR',
        params: { employeeID, packageIds },
      });
    }
  };

  return (
    <>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={scanning ? handleBarcodeScanned : undefined} // Disable scanning temporarily
      />
      <Overlay />
    </>
  );
}
