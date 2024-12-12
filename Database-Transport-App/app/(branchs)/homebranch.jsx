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
            <Image source={{ uri: 'https://i.pinimg.com/736x/3e/1e/d3/3e1ed370701d3cdc4f82a61a22f4acb3.jpg' }} style={styles.userImage}/>
            </View>
            <Text style={styles.userName}>Song Khue</Text>
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
            <Text style={styles.cell_Header}>Task</Text>
            <Text style={styles.cell_Header}>Report</Text>
            <Text style={styles.cell_Header}>Status</Text>
          </View>
          
          {/* Table Rows */}
          <View style={styles.row}>
            <Text style={styles.cell_Data}>Export</Text>
            <Text style={styles.cell_Data}>RP0001</Text>
            <Text style={styles.cell_Data}>not started</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.cell_Data}>Export</Text>
            <Text style={styles.cell_Data}>RT0001</Text>
            <Text style={styles.cell_Data}>in progress</Text>
          </View>
      
        </View>
        </ScrollView>
      </View>
    </View>
  )
}