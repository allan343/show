import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import Show from './Show';
import ApiContext from '../ApiContext/ApiContext'
import App from '../App/App'

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

it('renders without crashing', () => {
  const div = document.createElement('div')

  let myShow= {
    showname:"showname",
    id: 2,
  watching:false,
  towatch:false,
  watchLogVisible:false
  }

  let app = <App/>
  app.context ={
    getShow: myShow

  }

  ReactDOM.render(

  <BrowserRouter>
  
{<Show id ={2} />
}
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
