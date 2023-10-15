import React from 'react'
import ReactDom from 'react-dom'

import AppRouter from './components/app_router'

import './stylesheets/styles.css'

//import './fonts/Gabarito/Gabarito-Regular.ttf'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

ReactDom.render(
  <AppRouter />,
  document.getElementById('root')
)
