import { StyleSheet } from "react-native";
import { Colors } from '../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE8',
  },

  Header: {
    marginTop: '50%',
    marginLeft: '10%',
  },
  
  Header_Text: {
    fontSize: 24, 
		fontFamily: 'roboto-bold', 
		color: '#608BC1',
  },

  Describe: {
    fontSize: 14,
    fontFamily: 'roboto',
    color:'#6E6868',
  },
  Content: {
    marginLeft:'10%',
    marginTop: '10%',
  },

  frame_to_fill: {
    width: '90%',
    height: 50,
    marginTop:'2%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  Forgot_Pass: {
    color:'#4A628A',
    fontFamily:'roboto',
  },

  Login_Button: {
    marginTop:'10%',
    marginLeft:'20%',
    marginRight:'20%',
    backgroundColor: '#4A628A', 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 4,
  },

  Login_Button_Text: {
    fontFamily: 'roboto-bold',
    color: '#FFFFE8',
    fontSize: 16,
    textAlign: 'center',
  }
});
