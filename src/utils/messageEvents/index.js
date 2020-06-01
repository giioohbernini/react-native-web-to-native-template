import equals from 'ramda/src/equals'
import cond from 'ramda/src/cond'
import always from 'ramda/src/always'
import T from 'ramda/src/T'

import logout from './logout'
import routeChange from './routeChange'
import backPress from './backPress'

const messageEvents = ({ eventName, ...props }) => {
  const fn = cond([
    [equals('logout'), always(logout)],
    [equals('routeChange'), always(routeChange)],
    [equals('backPress'), always(backPress)],
    [T, always(always({}))],
  ])(eventName)

  return fn({ ...props })
}

export default messageEvents
