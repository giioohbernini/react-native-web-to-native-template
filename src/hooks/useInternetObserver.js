import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'

export default () => {
  const navigation = useNavigation()

  const [hasInternet, setHasInternet] = useState(false)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      setHasInternet(isConnected)

      if (!isConnected) {
        navigation.navigate('offline')
      } else {
        navigation.navigate('webview')
      }
    })

    return () => {
      unsubscribe()
    }
  })

  return {
    hasInternet,
  }
}
