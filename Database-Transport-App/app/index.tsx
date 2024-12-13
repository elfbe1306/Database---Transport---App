import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../Styles/LoginPage_Style';
import { useRouter } from 'expo-router';
import supabase from '../lib/supabase-client';

const Index = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const OnSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Email không đúng định dạng");
      return;
    }

    if (password.length < 4) {
      Alert.alert("Mật khẩu phải có ít nhất 4 ký tự");
      return;
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        console.error("Authentication Error:", authError);
        Alert.alert("Đăng nhập thất bại", authError.message);
        return;
      }

      const { data: employeeData, error: employeeError } = await supabase
        .from('employee')
        .select('e_id')
        .eq('e_email', email)
        .single();

      if (employeeError) {
        console.error('Error fetching employee data:', employeeError);
        Alert.alert('Lỗi khi lấy thông tin nhân viên');
        return;
      }

      if (employeeData?.e_id?.startsWith('EMP')) {
        router.push({
          pathname: '/home',
          params: {employeeID: employeeData?.e_id}
        });
      } else {
        router.push({
          pathname: '/homebranch',
          params: {employeeID: employeeData?.e_id}
        });
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      Alert.alert("Có lỗi xảy ra, vui lòng thử lại sau");
    }
  };

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
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.Describe}>Password</Text>
        <TextInput 
          style={styles.frame_to_fill} 
          placeholder="Enter your password" 
          placeholderTextColor="#888" 
          secureTextEntry={true} 
          onChangeText={setPassword}
          value={password}
        />
        <Text style={styles.Forgot_Pass}>Forgot your password?</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.Login_Button} onPress={OnSignIn}>
          <Text style={styles.Login_Button_Text}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;