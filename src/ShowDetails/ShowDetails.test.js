import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import ShowDetails from './ShowDetails';

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
     <ShowDetails/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
