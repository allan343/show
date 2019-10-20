import React from 'react'


import ShowListNav from '../ShowListNav/ShowListNav'
import ApiContext from '../ApiContext/ApiContext'




export default class Finished extends React.Component {
  static contextType = ApiContext;



  render() {
    return <ShowListNav></ShowListNav>
    
  
  }
}
