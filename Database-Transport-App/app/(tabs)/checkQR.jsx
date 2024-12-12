import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../../Styles/checkQR_Style' 
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams } from 'expo-router';

export default function checkQR() {
  const {employeeID, packageIds} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.firstHeaderContainer}>
          <View style={styles.userNameBox}>
            <View style={styles.imageBox}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/64/56/c4/6456c41df52ca456a072dc086c091f7a.jpg' }} style={styles.userImage}/>
            </View>
            <Text style={styles.userName}>Doan Le Vy</Text>
          </View>

          <View style={styles.notificationButton}>
            <Feather name="bell" size={30} color="#4A628A" />
          </View>
        </View>
      </View>

      <View style={styles.bodyContainer}> 
        <ScrollView style={styles.tableContainer}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.row_Header}>
            <Text style={[styles.cell_Header, { flex: 1.2 }]}>ID</Text>
            <Text style={[styles.cell_Header, { flex: 4}]}>Product</Text>
            <Text style={[styles.cell_Header, { flex: 1.2 }]}>ScanQR</Text>
            <Text style={[styles.cell_Header, { flex: 1.2}]}>Status</Text>
          </View>
          
          {/* Table Rows */}
          <View style={styles.row}>
            <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0001</Text>
            <Text style={[styles.cell_Data, { flex: 4 }]}>Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml</Text>
            <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
            <Text style={[styles.cell_Data, { flex: 1.2 }]}>success</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0002</Text>
            <Text style={[styles.cell_Data, { flex: 4 }]}>Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml</Text>
            <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
            <Text style={[styles.cell_Data, { flex: 1.2 }]}>not started</Text>
          </View>
      
        </View>
        </ScrollView>
      </View>

      <View style={styles.Footer_container}>
          <TouchableOpacity style={styles.confirmed_Button}>
            <Text style={styles.confirmed_Button_Text}>Start Delivery</Text>
        </TouchableOpacity>
        </View>

    </View>
  )
}
