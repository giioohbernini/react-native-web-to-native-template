import { AsyncStorage } from 'react-native'

const logout = ({ clear }) => {
	console.log('logout')
	if (clear) {
		AsyncStorage.clear()
	}
}

export default logout
