import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import {Overlay} from '../../components/Overlay'
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function scanner() {
  const router = useRouter()
  const {employeeID, packageIds} = useLocalSearchParams();
  return (
    <>
      <CameraView style={StyleSheet.absoluteFillObject} facing='back' onBarcodeScanned={({data}) => {
        router.replace({
          pathname: '/checkQR',
          params: {employeeID: employeeID, packageIds: packageIds ,dataQR : data}
        })
      }}/>
      <Overlay/>
    </>
  )
}