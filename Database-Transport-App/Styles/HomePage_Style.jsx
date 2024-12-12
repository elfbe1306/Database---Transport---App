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

  set_Day_Time: {
    fontSize: 16,
    fontFamily:'roboto-bold',
    color: '#4A628A',
    marginHorizontal: 0,
    textAlign: 'left',
    marginLeft:'10%',
    marginTop:'45%'
  },


  
});
