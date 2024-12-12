import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {styles} from '../../Styles/HomePage_Style'
import { format, set } from 'date-fns'; 
import Feather from '@expo/vector-icons/Feather';
import {useLocalSearchParams, useRouter} from 'expo-router';
import supabase from '../../lib/supabase-client'


export default function home() {
  const today = format(new Date(), 'EEEE MMMM d, yyyy');
  const {employeeID} = useLocalSearchParams();

  const router = useRouter();

  useEffect(() => {
    fetchingTask();
    fetchingBranchName();
  }, [])

  const [task, setTask] = useState([]);
  const [branchName, setBranchName] = useState([]);

  const fetchingTask = async () => {
    const {data, error} = await supabase.from('report').select('*').eq('assign_employee_id', employeeID);
    if(error) {
      console.error('Error fetching Task:', error);
    } else {
      setTask(data);
    }
  }

  const fetchingBranchName = async () => {
    const {data, error} = await supabase.from('export_report_has_package').select('export_report_id, package(package_id, branch_warehouse(branch_id, warehouse(w_id, w_location, w_area, w_name)))');
    if(error) {
      console.error('Error fetching Branch Name:', error);
    } else {
      setBranchName(data);
    }
  }

  const getBranchName = (reportId) => {
    const branch = branchName.find(
      (item) => item.export_report_id === reportId
    );
    return branch?.package?.branch_warehouse?.warehouse?.w_name || 'Unknown Branch';
  };

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
            <Text style={styles.cell_Header}>Task</Text>
            <Text style={styles.cell_Header}>Branch's Name</Text>
            <Text style={styles.cell_Header}>Report</Text>
            <Text style={styles.cell_Header}>Status</Text>
          </View>
          
          {/* Table Rows */}
          {task.map((tsk) => (
            <View style={styles.row} key={tsk.report_id}>
              <Text style={styles.cell_Data}>
                {tsk.report_id.startsWith('EX') ? 'Export' : tsk.report_id.startsWith('RT') ? 'Retrieve' : 'Unknown'}
              </Text>
              <Text style={styles.cell_Data}>{getBranchName(tsk.report_id)}</Text>
              <TouchableOpacity onPress={() => {
                router.push({
                  pathname: '/report',
                  params: {employeeID: employeeID}
                })
              }}>
                <Text style={styles.cell_Data}>{tsk.report_id}</Text>
              </TouchableOpacity>
              <Text style={styles.cell_Data}>{tsk.status}</Text>
            </View>
          ))}
      
        </View>
        </ScrollView>
      </View>
    </View>
  )
}