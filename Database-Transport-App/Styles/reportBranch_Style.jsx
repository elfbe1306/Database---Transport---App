import { StyleSheet } from "react-native";
import { Colors } from '../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE8'
  },

  headerContainer: {
    flex: 1.8
  },
  Footer_container: {
    flex: 3.5,
    marginTop: '45%',
    marginBottom: '50%'
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

  Report_frame: {
    width: 320,
    height: 455,
    backgroundColor: 'orange',
    marginHorizontal: 50,
    marginTop:'40%',
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

  confirmed_Button: {
    marginHorizontal: '15%',
    marginTop:'5%',
    backgroundColor: '#4A628A', 
    paddingVertical: 10,
    borderRadius: 12,
  },

  confirmed_Button_Text: {
    fontFamily: 'roboto-bold',
    color: '#FFFFE8',
    fontSize: 12,
    textAlign: 'center',
  }
  
});
