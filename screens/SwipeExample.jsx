import {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

const SwipeExample = () => {
  const renderLeftActions = () => {
    return (
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 30,
          }}>
          DELETE
        </Text>
      </View>
    );
  };
  const renderRightActions = () => {
    return (
      <Animated.View
        style={{
          backgroundColor: 'blue',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            padding: 30,
          }}>
          EDIT
        </Text>
      </Animated.View>
    );
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Swipeable
          overshootLeft={false}
          overshootRight={false}
          dragOffsetFromLeftEdge={100}
          dragOffsetFromRightEdge={100}
          renderLeftActions={renderLeftActions}
          renderRightActions={renderRightActions}>
          <View
            style={{
              backgroundColor: 'green',
              padding: 30,
              width: '100%',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
              }}>
              SWIPE RIGHT
            </Text>
          </View>
        </Swipeable>
      </View>
    </GestureHandlerRootView>
  );
};
export default SwipeExample;
