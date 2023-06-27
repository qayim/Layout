import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Pressable, StyleSheet, View, Animated } from 'react-native';

export default function App() {
  const color = [
    'lightseagreen',
    'firebrick',
    'lightpink',
    'maroon',
    'cornflowerblue',
    'burlywood',
    'darkslateblue',
    'lightcoral',
    'orange',
    'darksalmon'
  ];

  const size = [1, 2, 4, 6, 8];

  const fadeAnim = useRef(
    Array.from({ length: 9 }).map(() => new Animated.Value(0))
  ).current;

  //false - fade in || true - fade out
  const [box, setBox] = useState(false);
  //enable randomize
  const [randomEnabler, setRandomEnabler] = useState(false)

  //function to randomize size of box
  const randomBoxSize = () =>{
    let randomBoxNum = Math.floor(Math.random() * size.length);
    return randomBoxNum;
  }

  //variable to store and compare random color index
  var colorRepeat = [];

  //function to randomize colors
  const randomColor = () => {
    let randomNum = color[Math.floor(Math.random() * color.length)];

    if (!colorRepeat.includes(randomNum)) {
      colorRepeat.push(randomNum);
      console.log(randomNum);
      return randomNum;
    } else {
      if (colorRepeat.length < color.length) {
        return randomColor();
      } else {
        console.log(colorRepeat);
        colorRepeat = [];
        return randomColor();
      }
    }
  };

  //to get ori color
  const colorRef = useRef(null);
  colorRef.current = colorRepeat;

  //to fade in and fade out
  const onClickHandler = () => {
    if (box === false) {
      const fadeInAnimations = Animated.stagger(
        300,
        fadeAnim.map((item) => {
          return Animated.timing(item, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          });
        })
      );
      fadeInAnimations.start();
      setBox(true);
    } else {
      const fadeOutAnimations = Animated.stagger(
        300,
        fadeAnim
          .map((item) => {
            return Animated.timing(item, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            });
          })
          .reverse()
      );
      fadeOutAnimations.start(); 
      setBox(false);
    }
    console.log("fade " + box);
  };

  //randomize size of boxes
  const onLongPressHandler = () => {
    setRandomEnabler(!randomEnabler);
    console.log("long press")
  };

  return (
    <View style={styles.container}>
      {/* row 1 */}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[7] : fadeAnim[1],
            flex: randomEnabler ? size[randomBoxSize()] : size[4],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[8] : fadeAnim[0],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
      {/* row 2 */}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[6] : fadeAnim[2],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[5] : fadeAnim[3],
            flex: randomEnabler ? size[randomBoxSize()] : size[4],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
      {/* row 3 */}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[1] : fadeAnim[7],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[2] : fadeAnim[6],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[3] : fadeAnim[5],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[4] : fadeAnim[4],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
      {/* row 4  with button*/}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[0] : fadeAnim[8],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            height: "70%",
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        {/* Button */}
        <Pressable
          onPress={onClickHandler}
          onLongPress={onLongPressHandler}
          style={{
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: randomColor(),
          }}
        ></Pressable>

        <Animated.View
          style={{
            opacity: box ? fadeAnim[0] : fadeAnim[8],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            marginTop: "10%",
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
      {/* row 5 */}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[4] : fadeAnim[4],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[3] : fadeAnim[5],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[2] : fadeAnim[6],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[1] : fadeAnim[7],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
      {/* row 6 */}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[5] : fadeAnim[3],
            flex: randomEnabler ? size[randomBoxSize()] : size[4],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[6] : fadeAnim[2],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
      {/* row 7 */}
      <View style={styles.row}>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[8] : fadeAnim[0],
            flex: randomEnabler ? size[randomBoxSize()] : size[1],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
        <Animated.View
          style={{
            opacity: box ? fadeAnim[7] : fadeAnim[1],
            flex: randomEnabler ? size[randomBoxSize()] : size[4],
            backgroundColor: box ? randomColor() : colorRef.current,
          }}
        ></Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#000",
  },
});
