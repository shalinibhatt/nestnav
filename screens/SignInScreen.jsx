import {Text, View, StyleSheet, StatusBar, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <View  style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Login
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
