import React from 'react'
import { render } from 'react-dom'

import App from './App'

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer()

  const container = document.createElement('div')
  document.body.appendChild(container)

  render(<App plugin={plugin} />, container)
})
