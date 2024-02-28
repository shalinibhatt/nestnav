import {Text, View, StyleSheet} from 'react-native';
const Other = () => {
  return (
    <View style={styles.container}>
      <Text>Other</Text>
    </View>
  );
};

export default Other;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
