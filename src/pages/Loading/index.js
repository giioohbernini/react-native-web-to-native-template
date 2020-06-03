import React from 'react'

import Loader from '~/components/Loader'
import SafeView from '~/components/SafeView'

const Loading = () => {
  return (
    <SafeView>
      <Loader />
    </SafeView>
  )
}

export default Loading
