import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {styles} from '../../Styles/reportBranch_Style'
import { format } from 'date-fns'; 
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function home() {
  const today = format(new Date(), 'EEEE MMMM d, yyyy');

  return (
    <ScrollView style={styles.container}>

      <View style={styles.headerContainer}>
        <View style={styles.firstHeaderContainer}>
          <View style={styles.userNameBox}>
            <View style={styles.imageBox}>
            <Image source={{ uri: 'https://i.pinimg.com/736x/3e/1e/d3/3e1ed370701d3cdc4f82a61a22f4acb3.jpg' }} style={styles.userImage}/>
            </View>
            <Text style={styles.userName}>Song Khue</Text>
          </View>

          <View style={styles.notificationButton}>
            <Feather name="bell" size={30} color="#4A628A" />
          </View>
        </View>

      </View>
        
        <View style={styles.Body_container}>
          <View style={styles.Report_frame}>
            <Text>Anh bỏ cái report zô đây nè</Text>
          </View>
        </View>

        <View style={styles.Footer_container}>
            <View style={styles.tableContainer}>
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

            <View style={styles.row}>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0002</Text>
                <Text style={[styles.cell_Data, { flex: 4 }]}>Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml</Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>not started</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0002</Text>
                <Text style={[styles.cell_Data, { flex: 4 }]}>Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml</Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>not started</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0002</Text>
                <Text style={[styles.cell_Data, { flex: 4 }]}>Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml</Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>not started</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0002</Text>
                <Text style={[styles.cell_Data, { flex: 4 }]}>Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml</Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>not started</Text>
            </View>

            <View style={styles.row}>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>MP0002</Text>
                <Text style={[styles.cell_Data, { flex: 4 }]}>Kem Chống Nắng La Roche-Posay Kiểm Soát Dầu SPF50+ 50ml</Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}><MaterialIcons name="qr-code-scanner" size={24} color="black" /></Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>not started</Text>
            </View>
        
            </View>
            </View>

            <TouchableOpacity style={styles.confirmed_Button}>
                <Text style={styles.confirmed_Button_Text}>Confirmed</Text>
            </TouchableOpacity>
            
        </View>

    </ScrollView>
  )
}