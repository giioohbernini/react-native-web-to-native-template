import NetInfo from '@react-native-community/netinfo'

const getInternetStatus = async () =>
  await NetInfo.fetch().then(state => state.isConnected)

export default getInternetStatus
