import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Other from '../screens/Other';
import SwipeExample from '../screens/SwipeExample';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="TabNavigation">
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Other" component={Other} />
      <Stack.Screen name="SwipeExample" component={SwipeExample} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
