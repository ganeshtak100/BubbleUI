import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data from './assests/data';
const {width, height} = Dimensions.get('window');
const App = () => {
  // const scrollable = useRef(null);
  const scrollable = useRef(new Animated.Value(0)).current;
  const [xOffset, setXOffSet] = useState(0);
  const [yOffset, setYOffSet] = useState(0);
  const dummyColors = [
    '#F79256',
    '#FBD1A2',
    '#7DCFB6',
    '#00B2CA',
    '#1D4E89',
    '#76d',
    '#2F2F5F',
    '#4CA9DF',
    '#F1F4FA',
    '#F15055',
    '#009539',
    '#376586',
    '#686661',
  ];
  let dummtData = [
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
    {
      color: 'red',
      value: '#f00',
    },
    {
      color: 'green',
      value: '#0f0',
    },
    {
      color: 'blue',
      value: '#00f',
    },
    {
      color: 'cyan',
      value: '#0ff',
    },
    {
      color: 'magenta',
      value: '#f0f',
    },
    {
      color: 'yellow',
      value: '#ff0',
    },
    {
      color: 'black',
      value: '#000',
    },
  ];
  const defaultOptions = {
    size: 180, //The maximum diameter of a bubble, in pixels
    minSize: 18, //The minimum diameter of a bubble, in pixels
    gutter: 8, //The distance between individual bubbles, in pixels
    numCols: 6, //The number of columns into which bubbles are organized. Rows are composed accordingly
    xRadius: 120, //The horizontal radius of the region where bubbles are at their maximum size, in pixels
    yRadius: 160, //The vertical radius of the region where bubbles are at their maximum size, in pixels
    cornerRadius: 60, //The amount by which the corners of the region where bubbles are at their maximum size are rounded, in pixels. If this value is equal to xRadius and yRadius, a circle inscribes the region
    fringeWidth: 140, //The width of the fringe, or region just outside the center where bubbles grow from their minimum to maximum size, in pixels
    gravitation: 7, //The amount, scaled 0 to 10, by which exterior bubbles are attracted to the center region
    showGuides: false, //Whether or not the visual guides, including center region and fringe, are show over the bubbles. Useful when designing the bubble layout
    compact: false, //Whether or not bubbles near the center region should fill in space wherever possible
    provideProps: false, //Whether or not bubbleSize, distanceToCenter, maxSize, and minSize values are passed to corresponding children as props
  };
  const [options, setOptions] = useState({
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  });

  const getRandomColor = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };

  let optionss = {};
  Object.assign(optionss, defaultOptions);
  optionss.numCols = Math.min(optionss.numCols);
  // console.log('bydefault options==', optionss);
  const minProportion = optionss.minSize / optionss.size;

  const verticalPadding = `calc(50% - ${
    optionss.yRadius +
    optionss.size / 2 -
    (optionss.cornerRadius * (1.414 - 1)) / 1.414
  })`;
  const horizontalPadding = `calc(50% - ${
    optionss.xRadius +
    optionss.size / 2 -
    (optionss.cornerRadius * (1.414 - 1)) / 1.414
  })`;
  console.log('horizontlpadding--', horizontalPadding);

  let rows = [];
  var colsRemaining = 0;
  var evenRow = true;
  for (var i = 0; i < 19; i++) {
    if (colsRemaining == 0) {
      colsRemaining = evenRow ? optionss.numCols - 1 : optionss.numCols;
      evenRow = !evenRow;
      rows.push([]);
    }
    rows[rows.length - 1].push([dummtData[i].color]);
    colsRemaining--;
    // console.log('rows,', dummtData[i].color);
  }
  if (rows.length > 1) {
    if (rows[rows.length - 1].length % 2 == rows[rows.length - 2].length % 2) {
      rows[rows.length - 1].push(<View></View>); // dummy bubble
    }
  }

  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = e => {
    console.log('scroll events', scrollTop, scrollLeft);
    if (e) {
      setScrollTop(e.nativeEvent.contentOffset.y);
      scrollable.setValue(e.nativeEvent.contentOffset.y);

      // setScrollLeft(e.nativeEvent.contentOffset.x);
    }
  };

  useLayoutEffect(() => {
    console.log('scrollable  enents---', scrollable?.current?.scrollTo);
    scrollable.current.scrollTo({
      x: (scrollable.current.scrollWidth - scrollable.current.clientWidth) / 2,
      y:
        (scrollable.current.scrollHeight - scrollable.current.clientHeight) / 2,
      animated: true,
    });
  }, []);

  const interpolate = (actualMin, actualMax, val, targetMin, targetMax) => {
    return (
      ((val - actualMin) / (actualMax - actualMin)) * (targetMax - targetMin) +
      targetMin
    );
  };

  const getBubbleSize = (row, col) => {
    // console.log('bubble size rows and colu,mn value00', row, col);
    const yOffset =
      (optionss.size + optionss.gutter) * 0.866 * row -
      optionss.size +
      (optionss.cornerRadius * (1.414 - 1)) / 1.414 -
      (optionss.yRadius - optionss.size);
    //  - options.cornerRadius / 1.414;
    const xOffset =
      (optionss.size + optionss.gutter) * col +
      ((optionss.numCols - rows[row].length) *
        (optionss.size + optionss.gutter)) /
        2 -
      optionss.size +
      (optionss.cornerRadius * (1.414 - 1)) / 1.414 -
      (optionss.xRadius - optionss.size);
    // console.log('x and y offset value-----', xOffset, '---', yOffset);
    // - optionss.cornerRadius / 1.414;
    const dy = yOffset - scrollTop;
    const dx = xOffset - scrollLeft;
    // console.log('scrollTo topvalue for dx---', dy, dx);
    const distance = Math.sqrt(dx * dx + dy * dy);
    // let theta = Math.atan(dy / dx);
    // if (dx < 0) theta += Math.PI;
    let out = {
      bubbleSize: 1,
      translateX: 0,
      translateY: 0,
      distance: distance,
    };
    let distanceFromEdge = 0;
    let isInCornerRegion = false;
    if (Math.abs(dx) <= optionss.xRadius && Math.abs(dy) <= optionss.yRadius) {
      // inner square
      if (
        Math.abs(dy) > optionss.yRadius - optionss.cornerRadius &&
        Math.abs(dx) > optionss.xRadius - optionss.cornerRadius
      ) {
        // in corner region
        const distToInnerCorner = Math.sqrt(
          Math.pow(Math.abs(dy) - optionss.yRadius + optionss.cornerRadius, 2) +
            Math.pow(
              Math.abs(dx) - optionss.xRadius + optionss.cornerRadius,
              2,
            ),
        );
        if (distToInnerCorner > optionss.cornerRadius) {
          // outside inner radius
          distanceFromEdge = distToInnerCorner - optionss.cornerRadius;
          isInCornerRegion = true;
        }
      }
    } else if (
      Math.abs(dx) <= optionss.xRadius + optionss.fringeWidth &&
      Math.abs(dy) <= optionss.yRadius + optionss.fringeWidth
    ) {
      // outer square
      if (
        Math.abs(dy) > optionss.yRadius - optionss.cornerRadius &&
        Math.abs(dx) > optionss.xRadius - optionss.cornerRadius
      ) {
        // in corner region
        isInCornerRegion = true;
        const distToInnerCorner = Math.sqrt(
          Math.pow(Math.abs(dy) - optionss.yRadius + optionss.cornerRadius, 2) +
            Math.pow(
              Math.abs(dx) - optionss.xRadius + optionss.cornerRadius,
              2,
            ),
        );
        distanceFromEdge = distToInnerCorner - optionss.cornerRadius;
        // distanceFromEdge = Math.min(
        //   distToInnerCorner - optionss.cornerRadius,
        //   optionss.fringeWidth
        // );
      } else {
        distanceFromEdge = Math.max(
          Math.abs(dx) - optionss.xRadius,
          Math.abs(dy) - optionss.yRadius,
        );
      }
    } else {
      // outside outer square
      isInCornerRegion =
        Math.abs(dy) > optionss.yRadius - optionss.cornerRadius &&
        Math.abs(dx) > optionss.xRadius - optionss.cornerRadius;
      if (isInCornerRegion) {
        const distToInnerCorner = Math.sqrt(
          Math.pow(Math.abs(dy) - optionss.yRadius + optionss.cornerRadius, 2) +
            Math.pow(
              Math.abs(dx) - optionss.xRadius + optionss.cornerRadius,
              2,
            ),
        );
        distanceFromEdge = distToInnerCorner - optionss.cornerRadius;
      } else {
        distanceFromEdge = Math.max(
          Math.abs(dx) - optionss.xRadius,
          Math.abs(dy) - optionss.yRadius,
        );
      }
    }

    out.bubbleSize = interpolate(
      0,
      optionss.fringeWidth,
      Math.min(distanceFromEdge, optionss.fringeWidth),
      1,
      minProportion,
    );

    //handle magnitudes

    const translationMag = optionss.compact
      ? (optionss.size - optionss.minSize) / 2
      : 0;
    const interpolatedTranslationMag = interpolate(
      0,
      optionss.fringeWidth,
      distanceFromEdge,
      0,
      translationMag,
    );

    if (distanceFromEdge > 0 && distanceFromEdge <= optionss.fringeWidth) {
      out.translateX = interpolatedTranslationMag;
      out.translateY = interpolatedTranslationMag;
    } else if (distanceFromEdge - optionss.fringeWidth > 0) {
      const extra =
        (Math.max(
          0,
          distanceFromEdge - optionss.fringeWidth - optionss.size / 2,
        ) *
          optionss.gravitation) /
        10;
      out.translateX = translationMag + extra;
      out.translateY = translationMag + extra;
    }

    if (isInCornerRegion) {
      const cornerDx = Math.abs(dx) - optionss.xRadius + optionss.cornerRadius;
      const cornerDy = Math.abs(dy) - optionss.yRadius + optionss.cornerRadius;
      let theta = Math.atan(-cornerDy / cornerDx);
      if (dx > 0) {
        if (dy > 0) {
          theta *= -1;
        }
      } else {
        if (dy > 0) {
          theta += Math.PI;
        } else {
          theta += Math.PI - 2 * theta;
        }
      }
      out.translateX *= -Math.cos(theta);
      out.translateY *= -Math.sin(theta);
    } else if (
      Math.abs(dx) > optionss.xRadius ||
      Math.abs(dy) > optionss.yRadius
    ) {
      if (Math.abs(dx) > optionss.xRadius) {
        out.translateX *= -Math.sign(dx);
        out.translateY = 0;
      } else {
        out.translateY *= -Math.sign(dy);
        out.translateX = 0;
      }
    }

    // console.log('out------', out);
    return out;
  };

  // console.log(
  //   'WIDTH AND HEIGHT VALUE dynamicaly---',
  //   optionss.width,
  //   optionss.height,
  // );
  //   const onScroll={Animated.event(
  //   [{
  //     nativeEvent: {
  //       contentOffset: {
  //         y: scrolling,
  //       },
  //     },
  //   }],
  //   { useNativeDriver: true },
  // )}
  // let translateX = new Animated.Value(0);
  // let translateY = new Animated.Value(0);
  // const handleGesture = Animated.event(
  //   [
  //     {
  //       nativeEvent: {
  //         translationX: translateX,
  //         translationY: translateY,
  //       },
  //     },
  //   ],
  //   {useNativeDriver: true},
  // );

  // let circleTransformStyle = {
  //   transform: [
  //     {
  //       translateY: translateY,
  //     },
  //     {
  //       translateX: translateX,
  //     },
  //   ],
  // };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={handleGesture}> */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            // backgroundColor: 'red',
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            // circleTransformStyle,
          }}>
          <Animated.ScrollView
            ref={scrollable}
            onScroll={handleScroll}
            // onScroll={({nativeEvent}) => {
            //   console.log('onscroll-----', nativeEvent);
            // }}
            showsVerticalScrollIndicator={false}>
            <Animated.ScrollView
              // key={a}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={false}
              onScroll={({nativeEvent}) => {
                setScrollLeft(nativeEvent.contentOffset.x);
              }}
              horizontal>
              <Animated.View
                style={{
                  display: 'flex',
                  height: '100%',

                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // paddingLeft: '50%',
                  // paddingRight: '50%',
                  width:
                    optionss.size * optionss.numCols +
                    optionss.gutter * (optionss.numCols - 1),
                  // paddingLeft: `calc(50% -182.43281471004244)`,
                  // paddingRight: horizontalPadding,
                }}>
                {rows.map((row, i) => {
                  return (
                    <Animated.View
                      key={i}
                      style={{
                        // backgroundColor: 'red',
                        flex: 1,
                        top: 60,
                        display: 'flex',
                        height: '100%',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:
                          i > 0
                            ? optionss.size * -0.134 + optionss.gutter * 0.866 // .134 is sqrt(3) - 1
                            : 0,
                      }}>
                      {row.map((comp, j) => {
                        const {bubbleSize, translateX, translateY, distance} =
                          getBubbleSize(i, j);
                        // console.log(
                        //   'transform property--',
                        //   bubbleSize,
                        //   translateX,
                        //   translateY,
                        // );
                        return (
                          <TouchableOpacity
                            onPress={() => alert(data[i * j].companyName)}>
                            <Animated.View
                              key={j}
                              style={{
                                display: 'flex',
                                justifyContent: 'center',

                                alignItems: 'center',
                                width: optionss.size,
                                height: optionss.size,
                                marginRight: optionss.gutter / 2,
                                marginLeft: optionss.gutter / 2,
                                margin: 5,
                                borderRadius: 100,
                                backgroundColor: data[i * j].color,

                                transform: [
                                  {
                                    translateX: translateX,
                                  },
                                  {
                                    translateY: translateY,
                                  },
                                  {
                                    scale: bubbleSize,
                                  },
                                ],
                                // maxHeight: 160,
                                // maxWidth: 160,
                              }}>
                              <Animated.View
                                style={{
                                  backgroundColor: data[i * j].darkColor,
                                  padding: 5,
                                  borderRadius: optionss.size / 2,
                                }}>
                                <Animated.Image
                                  source={data[i * j].logo}
                                  resizeMode={'contain'}
                                  style={{
                                    width: optionss.size / 3,
                                    height: optionss.size / 3,
                                    borderRadius: optionss.size / 2,
                                  }}
                                />
                              </Animated.View>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: optionss.size / 7 - 5,
                                }}>
                                {data[i * j].companyName}
                              </Text>
                            </Animated.View>
                          </TouchableOpacity>
                        );
                      })}
                    </Animated.View>
                  );
                })}
              </Animated.View>
            </Animated.ScrollView>
          </Animated.ScrollView>
        </Animated.View>
      </View>
      {/* </PanGestureHandler>
      </GestureHandlerRootView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
