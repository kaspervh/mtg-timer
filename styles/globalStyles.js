import {StyleSheet, TextInput} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headLine: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },

  formContainer: {
    width: "40%",
    flexDirection: 'column',
  },

  TextInput: {
    padding: 0,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginBottom: 20,
  },

  Button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'red', 
    marginBottom: 30
  },

  ButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
})