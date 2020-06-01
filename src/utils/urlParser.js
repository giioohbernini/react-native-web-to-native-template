import queryStringParser from './queryStringParser.js'

//USING REGEX
/**
 * Parse URL to get information
 *
 * @param   url     the URL string to parse
 * @return  parsed  the URL parsed or null
 */
const URLParser = url => {
  var regx = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
    matches = regx.exec(url),
    parser = null

  if (matches !== null) {
    parser = {
      href: matches[0],
      withoutHash: matches[1],
      url: matches[2],
      origin: matches[3],
      protocol: matches[4],
      protocolseparator: matches[5],
      credhost: matches[6],
      cred: matches[7],
      user: matches[8],
      pass: matches[9],
      host: matches[10],
      hostname: matches[11],
      port: matches[12],
      pathname: matches[13],
      segment1: matches[14],
      segment2: matches[15],
      search: queryStringParser(matches[16]),
      hash: matches[17],
    }
  }

  return parser
}

export default URLParser
