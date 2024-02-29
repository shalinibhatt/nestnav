import {Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text
        onPress={() => navigation.navigate('Other')}
        style={{
          fontSize: 30,
          color: 'black',
        }}>
        Other Screen
      </Text>
      <Text
        onPress={() => navigation.navigate('SwipeExample')}
        style={{
          fontSize: 30,
          color: 'black',
        }}>
        Swipe Example
      </Text>
    </View>
  );
};
export default HomeScreen;
