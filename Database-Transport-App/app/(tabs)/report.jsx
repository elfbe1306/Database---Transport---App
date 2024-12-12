import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../../Styles/Report_Style'
import Feather from '@expo/vector-icons/Feather';


export default function report() {
  return (
    <View style={styles.container}>
        <View style={styles.Header_container}>
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

        <View style={styles.Body_container}>
          <View style={styles.Report_frame}>
            <Text>Anh bỏ cái report zô đây nè</Text>
          </View>
        </View>

        <View style={styles.Footer_container}>
          <TouchableOpacity style={styles.confirmed_Button}>
            <Text style={styles.confirmed_Button_Text}>Confirmed</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
