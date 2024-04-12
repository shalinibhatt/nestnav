import {Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      className={`bg-slate-600 flex-1 justify-center 
    items-center`}>
      <Text
        onPress={() => navigation.navigate('Other')}
        className={`text-3xl text-white`}>
        Other Screen
      </Text>
      <Text
        onPress={() => navigation.navigate('SwipeExample')}
        className={`text-3xl text-white`}>
        Swipe Example
      </Text>
    </View>
  );
};
export default HomeScreen;
