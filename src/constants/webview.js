import keys from 'ramda/src/keys'
import pipe from 'ramda/src/pipe'
import defaultTo from 'ramda/src/defaultTo'

export const hostname = 'example.com'
export const rootUrl = 'http://example.com/'

export const urlToStatusBarColor = {
  default: {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
  },
}

export const getUrlToStatusBarColor = target => {
  const find = array => array.find(item => item === target)

  const getByKey = key => urlToStatusBarColor[key]

  const statusBarColor = pipe(
    keys,
    find,
    getByKey,
    defaultTo(urlToStatusBarColor.default),
  )(urlToStatusBarColor)

  return statusBarColor
}
