import {createStackNavigator, HeaderBackground, HeaderTitle} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FormScreen from '../screens/FormScreen';

const screens = {
  form: {
    screen: FormScreen,
    navigationOptions: {
      title: "Mtg Timer",
      headerLeft: null,
      headerStyle: {
        backgroundColor: "black"
      },
      headerTintColor: "white",
      headerTitleStyle:{
        alignSelf: "center"
      }
    } 
  }
}



const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);