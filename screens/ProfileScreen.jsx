import {Text, View} from 'react-native';
const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text
      onPress={()=>navigation.navigate('Other')}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'lightblue',
          fontSize: 20,
        }}>
        Other
      </Text>
    </View>
  );
};

export default ProfileScreen;
