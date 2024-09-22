import { View, Text,StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const index = () => {
    const [count,setCount]= useState(0)
    return (
        <View style={styles.container}>
        <Text style={styles.heading}>Counter App</Text>
        <Text style={styles.counterText}>{count}</Text>
        
        <View style={styles.buttonContainer}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    heading: {
      fontSize: 32,
      marginBottom: 20,
      fontWeight: 'bold',
    },
    counterText: {
      fontSize: 50,
      marginBottom: 40,
      fontWeight: 'bold',
    },
    buttonContainer: {
      width: '60%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 150,
    },
  });
  

export default index