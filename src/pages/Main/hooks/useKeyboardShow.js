import { StatusBar, Keyboard } from 'react-native'
import { useEffect } from 'react'

export default () => {
  const handleKeyboardShow = () => {
    StatusBar.setBarStyle('dark-content')
  }

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', handleKeyboardShow)
    return () => Keyboard.removeListener('keyboardWillShow', handleKeyboardShow)
  })

  return {}
}
