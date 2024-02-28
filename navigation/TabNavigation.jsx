import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
const TabNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="comments" size={25} color="black" />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Icon name="comments" size={25} color="black" />;
          },        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
