import React from 'react';
import {Text, View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';

const Other = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);
  useEffect(() => {
    const xValue = activeTab * 100 - 375 / 2 + 100 / 2;
    console.log('x:', xValue);
    scrollRef.current.scrollTo({
      x: activeTab * 100 - 375 / 2 + 100 / 2,
      y: 0,
      animated: true,
    });
  }, [activeTab]);

  const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <>
      <StatusBar backgroundColor="#B8860B" barStyle="light-content" />
      <View style={styles.container}>
        <ScrollView ref={scrollRef} horizontal={true} style={styles.scrollView}>
          {Days.map((item, index) => (
            <Text
              onPress={() => {
                setActiveTab(index);
              }}
              key={index}
              style={[
                styles.dayText,
                {
                  backgroundColor: activeTab === index ? '#000' : 'black',
                  color: activeTab === index ? '#B8860B' : '#B8860B',
                  textTransform: activeTab === index ? 'uppercase' : 'none',
                  transform: [{scale: activeTab === index ? 1.2 : 1}],
                },
              ]}>
              {item}
            </Text>
          ))}
        </ScrollView>
        <GestureHandlerRootView style={styles.swipeableContainer}>
          <Swipeable
            onSwipeableClose={event => {
              event === 'left'
                ? setActiveTab(activeTab === 0 ? 6 : activeTab - 1)
                : setActiveTab((activeTab + 1) % 7);
            }}
            containerStyle={styles.swipeable}>
            <Text style={styles.swipeableText}>{Days[activeTab]}</Text>
          </Swipeable>
        </GestureHandlerRootView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flexDirection: 'row',
    backgroundColor: '#B8860B',
  },
  dayText: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
  },
  swipeableContainer: {
    width: '100%',
    height: '90%',
  },
  swipeable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  swipeableText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B8860B',
    textTransform: 'uppercase',
  },
});

export default Other;
