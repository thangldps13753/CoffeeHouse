import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, height} = Dimensions.get('window');
const Carousel1 = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />

        <View style={StyleSheet.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  background: '#595959',
                  margin: 8,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  console.log('Please provider Image');
  return null;
};

export default Carousel1;

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
