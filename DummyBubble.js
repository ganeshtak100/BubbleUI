import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
export default function DummyBubble(props) {
  var size =
    props.xOffset >= props.xIndex * 120 - 120
      ? Math.abs(120 * props.xIndex - props.xOffset)
      : 120;
  // && props.yOffset >= props.yIndex * 120 - 120
  // ? Math.abs(120 * props.yIndex - props.yOffset)
  // : 120;
  // if (props.xIndex == 0) {
  //   console.log('-----,size', size);
  //   console.log('-----xindex,', props.xIndex);
  //   console.log('-----,xoffset', props.xOffset);
  // }
  console.log('-----,options', props.width);

  return (
    <TouchableOpacity onPress={() => alert()}>
      <Animated.View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.width,
          height: props.height,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          margin: 5,
          borderRadius: 100,
          backgroundColor: props.color ? props.color : 'red',
          // transform: `translateX(${translateX}) translateY(${translateY}) scale(${bubbleSize})`,

          // width: size,
          // height: size,
          maxHeight: 120,
          maxWidth: 120,
          // width: props.bubbleSize ? Math.round(props.bubbleSize) : 150,
          // height: props.bubbleSize ? Math.round(props.bubbleSize) : 150,
        }}></Animated.View>
    </TouchableOpacity>
  );
}
