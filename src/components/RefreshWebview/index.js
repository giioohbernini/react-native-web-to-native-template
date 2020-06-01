import React, { useState } from 'react'
import { RefreshControl } from 'react-native'

const RefreshWebview = ({ webview }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    webview.reload()
  }

  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}

export default RefreshWebview
