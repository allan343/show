import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import FooterNav from './FooterNav'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <FooterNav />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
