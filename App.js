import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import LoginScreen from './screens/LoginScreen';
import {Color} from './constants';
import StackNavigation from './navigation/StackNavigation';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Color.PRIMARY_COLOR} />
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StackNavigation" component={StackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
