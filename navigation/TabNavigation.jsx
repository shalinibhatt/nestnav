import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {faHome, faPersonRifle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Color} from '../constants';

const TabNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      shifting={true}
      activeColor={Color.PRIMARY_COLOR}
      activeIndicatorStyle={{
        height: 6,
        position: 'absolute',
        top: -10,
      }}
      barStyle={{backgroundColor: 'white'}}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faHome} size={25} color={color} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return (
              <FontAwesomeIcon icon={faPersonRifle} size={25} color={color} />
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
