import { rootUrl } from '~/constants/webview'

const routeChange = ({ location, setCurrentUrl, setCanGoBack }) => {
  const href = location && location.href

  if (href) {
    setCurrentUrl(href)
    setCanGoBack(!(href === rootUrl))
  }
}

export default routeChange
