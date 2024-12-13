import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../../Styles/HomePage_Style';
import { format } from 'date-fns';
import Feather from '@expo/vector-icons/Feather';
import { useLocalSearchParams, useRouter } from 'expo-router';
import supabase from '../../lib/supabase-client';

export default function Home() {
  const { employeeID } = useLocalSearchParams();
  const router = useRouter();

  const [BranchID, setBranchID] = useState();
  const [exportReportList, setExportReportList] = useState([]);
  const [statuses, setStatuses] = useState({}); // Map report IDs to statuses

  useEffect(() => {
    fetchingBrandID();
  }, [employeeID]);

  useEffect(() => {
    if (BranchID) {
      fetchingExportReportList();
    }
  }, [BranchID]);

  useEffect(() => {
    if (exportReportList.length > 0) {
      fetchStatuses();
    }
  }, [exportReportList]);

  const fetchingBrandID = async () => {
    const { data, error } = await supabase
      .from('warehouse')
      .select('w_id')
      .eq('supervisor_id', employeeID)
      .single();
    if (error) {
      console.error('Error fetching Branch ID: ', error);
    } else {
      setBranchID(data.w_id);
    }
  };

  const fetchingExportReportList = async () => {
    if (!BranchID) return;

    const { data, error } = await supabase
      .from('export_report_has_package')
      .select('export_report_id, package(package_id)')
      .eq('package.branch_id', BranchID);

    if (error) {
      console.error('Error fetching Export Report List:', error);
    } else {
      const uniqueReports = Array.from(new Set(data.map(a => a.export_report_id)))
        .map(id => data.find(a => a.export_report_id === id));
      setExportReportList(uniqueReports);
    }
  };

  const fetchStatuses = async () => {
    const statusesMap = {};
    for (const report of exportReportList) {
      const { data, error } = await supabase.rpc('get_report_status', { report_id_input: report.export_report_id });
      if (error) {
        console.error(`Error fetching status for report ${report.export_report_id}:`, error);
        statusesMap[report.export_report_id] = 'Error';
      } else {
        statusesMap[report.export_report_id] = data || 'Unknown';
      }
    }
    setStatuses(statusesMap);
  };

  const today = format(new Date(), 'EEEE MMMM d, yyyy');

  return (
    <View style={styles.container}>
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
            {exportReportList.map((report) => (
              <View style={styles.row} key={report.export_report_id}>
                <Text style={styles.cell_Data}>Export</Text>
                <TouchableOpacity onPress={() => {
                  router.push({
                    pathname: '/reportbranch',
                    params: {employeeID: employeeID, reportID: report.export_report_id}
                  })
                }}>
                  <Text style={styles.cell_Data}>{report.export_report_id}</Text>
                </TouchableOpacity>
                <Text style={styles.cell_Data}>{statuses[report.export_report_id] || 'Loading...'}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
