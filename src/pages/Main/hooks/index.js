import composeEnhancer from '~/utils/composeEnhancer'
import useInternetObserver from '~/hooks/useInternetObserver'

import propsMapper from './propsMapper'

import useWebview from './useWebview'
import useBackPress from './useBackPress'
import useKeyboardShow from './useKeyboardShow.js'

export default composeEnhancer(
  useInternetObserver,
  useWebview,
  useKeyboardShow,
  useBackPress,
  propsMapper,
)
