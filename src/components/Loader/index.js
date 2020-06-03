import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loader = ({ size = 'large', isLightColor }) => {
  const color = isLightColor ? '#FFF' : '#000'
  const backgroundColor = isLightColor ? '#000' : '#FFF'

  const styles = StyleSheet.create({
    activityView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      flex: 1,
      position: 'absolute',
      zIndex: 2,
      backgroundColor: backgroundColor,
    },
  })

  return (
    <View style={styles.activityView}>
      <ActivityIndicator color={color} size={size} />
    </View>
  )
}

export default Loader
