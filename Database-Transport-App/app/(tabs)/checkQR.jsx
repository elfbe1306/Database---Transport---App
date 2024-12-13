import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from '../../Styles/checkQR_Style' 
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useLocalSearchParams } from 'expo-router';
import supabase from '../../lib/supabase-client';
import {useCameraPermissions} from 'expo-camera'
import { Link } from 'expo-router';

export default function checkQR() {
  const { employeeID, packageIds, dataQR } = useLocalSearchParams(); // assuming packageIds is a string like "MP0008,MP0013"
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [packageIds]); // Depend on packageIds so the fetch only runs when packageIds changes

  const fetchProducts = async () => {
    // Ensure packageIds is not undefined or empty
    if (!packageIds) {
      console.error('No packageIds provided');
      return;
    }

    const packageIdsArray = packageIds.split(','); // Convert the comma-separated string into an array

    // Fetch products from Supabase
    const { data, error } = await supabase
      .from('package')
      .select('*')
      .in('package_id', packageIdsArray);

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data); // Set the state with fetched data
    }
  };

  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);

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

          {products.map((pkg) => (
            <View style={styles.row} key={pkg.package_id}>
              <Text style={[styles.cell_Data, { flex: 1.2 }]}>{pkg.package_id}</Text>
              <Text style={[styles.cell_Data, { flex: 4 }]}>{pkg.product_name}</Text>
              <TouchableOpacity style={[styles.cell_Data, { flex: 1.2 }]} disabled={!isPermissionGranted} onPress={() => {
                router.push({
                  pathname: '/scanner',
                  params: {employeeID: employeeID, packageIds: packageIds}
                })
              }}>
                <MaterialIcons name="qr-code-scanner" size={24} color="black" style={[{opacity: !isPermissionGranted ? 0.5 : 1}]}/>
              </TouchableOpacity>
              <Text style={[styles.cell_Data, { flex: 1.2 }]}>{pkg.packageIds === dataQR ? "Complete" : "Not started"}</Text>
            </View>
          ))}
      
        </View>
        </ScrollView>
      </View>

      <View style={styles.Footer_container}>
        <TouchableOpacity style={styles.confirmed_Button}>
            <Text style={styles.confirmed_Button_Text}>Start Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmed_Button} onPress={requestPermission}>
            <Text style={styles.confirmed_Button_Text}>Grant Permisson</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
