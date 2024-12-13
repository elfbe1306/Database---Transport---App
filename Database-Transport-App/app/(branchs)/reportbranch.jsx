import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles} from '../../Styles/reportBranch_Style'
import { format } from 'date-fns'; 
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import supabase from '../../lib/supabase-client';


export default function ReportBranch() {
  const today = format(new Date(), 'EEEE MMMM d, yyyy');
  const router = useRouter();
  const { employeeID, reportID } = useLocalSearchParams();
  
  useEffect(() => {
    handleFetchingProductsByReportID(reportID);
  }, [reportID])

  const [products, setProducts] = useState([])

  const handleFetchingProductsByReportID = async (input_export_report_id) => {
    const {data, error} = await supabase.rpc('get_product_name_and_package_id', {input_export_report_id})
    if(error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.firstHeaderContainer}>
          <View style={styles.userNameBox}>
            <View style={styles.imageBox}>
              <Image
                source={{ uri: 'https://i.pinimg.com/736x/3e/1e/d3/3e1ed370701d3cdc4f82a61a22f4acb3.jpg' }}
                style={styles.userImage}
              />
            </View>
            <Text style={styles.userName}>Song Khue</Text>
          </View>
          <View style={styles.notificationButton}>
            <Feather name="bell" size={30} color="#4A628A" />
          </View>
        </View>
      </View>
      <View style={styles.Footer_container}>
        <View style={styles.tableContainer}>
          <View style={styles.table}>
            <View style={styles.row_Header}>
              <Text style={[styles.cell_Header, { flex: 1.2 }]}>ID</Text>
              <Text style={[styles.cell_Header, { flex: 4 }]}>Product</Text>
              <Text style={[styles.cell_Header, { flex: 1.2 }]}>ScanQR</Text>
              <Text style={[styles.cell_Header, { flex: 1.2 }]}>Status</Text>
            </View>
            {products.map((pkg) => (
              <View style={styles.row} key={pkg.package_id}>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>{pkg.package_id}</Text>
                <Text style={[styles.cell_Data, { flex: 4 }]}>{pkg.product_name}</Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>
                  <MaterialIcons name="qr-code-scanner" size={24} color="black" />
                </Text>
                <Text style={[styles.cell_Data, { flex: 1.2 }]}>Success</Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.confirmed_Button}>
          <Text style={styles.confirmed_Button_Text}>Confirmed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
