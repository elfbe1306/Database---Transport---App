import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {styles} from '../../Styles/HomePage_Style'
import { format } from 'date-fns'; 
import Feather from '@expo/vector-icons/Feather';


export default function home() {
  const today = format(new Date(), 'EEEE MMMM d, yyyy');

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

        <View>
          <Text style={styles.set_Day_Time}>{today}</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}> 
        <ScrollView style={styles.tableContainer}>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.row_Header}>
            <Text style={styles.cell_Header}>Today's Task</Text>
            <Text style={styles.cell_Header}>Branch's Name</Text>
            <Text style={styles.cell_Header}>Report</Text>
            <Text style={styles.cell_Header}>Status</Text>
          </View>
          
          {/* Table Rows */}
          <View style={styles.row}>
            <Text style={styles.cell_Data}>Export</Text>
            <Text style={styles.cell_Data}>Kho Quận 1</Text>
            <Text style={styles.cell_Data}>RP0001</Text>
            <Text style={styles.cell_Data}>not started</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cell_Data}>Retrieve</Text>
            <Text style={styles.cell_Data}>Kho Quận Phú Nhuận</Text>
            <Text style={styles.cell_Data}>RT0001</Text>
            <Text style={styles.cell_Data}>in progress</Text>
          </View>
      
        </View>
        </ScrollView>
      </View>
    </View>
  )
}