import { StyleSheet } from "react-native";
import { Colors } from '../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE8'
  },

  headerContainer: {
    flex: 2.5
  },
  bodyContainer: {
    flex: 7.5
  },

  firstBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginVertical:'5%',
  },

  firstHeaderContainer: {
    position: 'absolute',
    marginTop: '20%',
    justifyContent:'space-between=',
    alignItems: 'center',
    alignContent: 'center',
    gap: '30%',
    flexDirection:'row',
  },
  userNameBox: {
    backgroundColor: '#4A628A',
    paddingLeft: 5,
    paddingRight: 30,
    paddingVertical: 5,
    borderRadius: 40,
    marginLeft: '5%',
    flexDirection:'row',
  },
  imageBox: {
    width: 50,  
    height: 50, 
    borderRadius: 75, 
    overflow: 'hidden', 
  },
  userImage : {
    top: -13,
    left: 0,
    width: 50, 
    height: 75,
    resizeMode: 'contain', 
  },
  userName: {
    marginTop: 16,
    marginLeft: 15,
    fontFamily: 'roboto-bold',
    color:'#FFFFE8',
    fontSize: 16 
  },
  
  notificationButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 99
  },

  set_Day_Time: {
    fontSize: 16,
    fontFamily:'roboto-bold',
    color: '#4A628A',
    marginHorizontal: 0,
    textAlign: 'left',
    marginLeft:'10%',
    marginTop:'45%'
  },

  tableContainer: {
    paddingHorizontal: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
  },

  row_Header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor:'#4A628A'
  },

  cell_Header: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderColor: 'black',
    fontSize: 12,
    fontFamily: 'roboto',
    color: '#FFFFE8'
  },

  cell_Data: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderColor: 'black',
    fontSize: 11,
    fontFamily: 'roboto',
  },
  
});
