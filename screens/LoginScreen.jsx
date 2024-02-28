import {Text, View, StyleSheet, StatusBar, Animated} from 'react-native';
export default function LoginScreen({navigation}) {
  return (
    <>
      <Text
        onPress={() => navigation.navigate('StackNavigation')}
        style={{
          textAlign: 'center',
          fontSize: 20,
          padding: 20,
          backgroundColor: 'lightblue',
        }}>
        Click here to enter into the app!
      </Text>
      <View style={styles.container}>
        <Text>Log In Screen</Text>
        <Text onPress={() => navigation.navigate('SignIn')}> Signup</Text>
      </View>
    </>
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
