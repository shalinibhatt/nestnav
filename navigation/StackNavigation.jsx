import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Other from '../screens/Other';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
      initialRouteName="TabNavigation">
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Other" component={Other} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
