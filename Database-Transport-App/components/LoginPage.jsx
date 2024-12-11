import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import {styles} from '../Styles/LoginPage_Style'

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}> 
        <Text style={styles.Header_Text}>LOG IN</Text>
        <Text style={styles.Describe}>Fill in your email and password to continue</Text>
      </View>
      <View style={styles.Content}>

        <Text style={styles.Describe}>Email Address</Text>
        <TextInput 
          style={styles.frame_to_fill} 
          placeholder="Enter your email" 
          placeholderTextColor="#888" 
        />
        <Text style={styles.Describe}>Password</Text>
        <TextInput 
          style={styles.frame_to_fill} 
          placeholder="Enter your password" 
          placeholderTextColor="#888" 
          secureTextEntry={true} 
        />
        <Text style={styles.Forgot_Pass}>Forgot your password?</Text>
      </View>
      <View>
      <TouchableOpacity style={styles.Login_Button}>
        <Text style={styles.Login_Button_Text}>Log in</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage