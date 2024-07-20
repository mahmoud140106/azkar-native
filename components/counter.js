import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View,Vibration } from "react-native";
import data from '../data/data.json';

function Counter ({initialCount,onPress,catId,selectedOne}){
    const [count, setCount] = useState(initialCount);

    function countHandler() {
      if (count >= 1) {
        setCount((count) => count - 1);
      }
      if(count <= 1){
        Vibration.vibrate(1001);
      }
        // console.log('selectedOne:', selectedOne);
        // const allCountsZero = selectedOne.every(item => item.count===0);
        // // Log the result
        // console.log(`All counts for category ${catId} are zero:`, allCountsZero);
    }

    return(
        <View style={styles.container}>
        <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
        styles.button,
        pressed ? styles.buttonPressed : null,
        ]}
        onPress={countHandler}
        >
            <Text style={styles.count}>{count}</Text>
        </Pressable>
        </View>
    )
}
export default Counter;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    },
    count:{
    // flex:1,
    backgroundColor:'#16712B',
    color:'#ffffff',
    textAlign:'center',
    fontSize:20,
    // marginTop:10,
    padding:10,
    // borderTopLeftRadius:25
    },
    button: {
    flex: 1,
    },
    buttonPressed: {
    opacity: 0.5,
    transform: [{ scale: 0.6 }],
    },
    });