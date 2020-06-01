import React from 'react'

const composeEnhancer = (...layers) => BaseComponent => {
  return props => {
    const hooksProps = layers.reduce((prevProps, layer) => {
      const layerProps = layer.call(null, { ...props, ...prevProps })

      return {
        ...prevProps,
        ...layerProps,
      }
    }, {})

    return <BaseComponent {...props} {...hooksProps} />
  }
}

export default composeEnhancer
