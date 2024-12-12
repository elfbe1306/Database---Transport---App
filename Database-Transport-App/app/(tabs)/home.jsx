import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {styles} from '../../Styles/HomePage_Style'
import { format } from 'date-fns'; 

export default function home() {
  const today = format(new Date(), 'EEEE MMMM d, yyyy');

  const data = [
    ['Today Task', 'Branch Name', 'Report', 'Status'], // Header row
    ['Export', 'Kho Quận 1', 'view', 'not ready'],
    ['Retrieve','Kho Quận Phú Nhuận','view','in progress']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.set_Day_Time}>{today}</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}> 
        
      </View>
    </View>
  )
}