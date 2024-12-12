import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import {styles} from '../Styles/LoginPage_Style'
import { useRouter } from 'expo-router'
import supabase from '../lib/supabase-client'
const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPasssword] = useState();

  const OnSignIn = async () => {
    if(!email || !password) {
      Alert.alert("Vui long nhap day du thong tin");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      Alert.alert("Email khong dung dinh dang");
      return;
    }

    if(password.length < 6) {
      Alert.alert("Mat khau phai co it nhat 6 ky tu");
      return;
    }

    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if(error) {
      setErrorMessage(error.message);
    } else {
      router.push('/(tabs)');
    }
  }

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
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={styles.Describe}>Password</Text>
        <TextInput 
          style={styles.frame_to_fill} 
          placeholder="Enter your password" 
          placeholderTextColor="#888" 
          secureTextEntry={true} 
          onChangeText={(value) => setPasssword(value)}
        />
        <Text style={styles.Forgot_Pass}>Forgot your password?</Text>
      </View>
      <View>
      <TouchableOpacity style={styles.Login_Button} onPress={OnSignIn}>
        <Text style={styles.Login_Button_Text}>Log in</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage