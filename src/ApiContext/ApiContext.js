import React from 'react'

export default React.createContext({

  shows: [],
  finishedShows: [],
  addShow: () => {},
  addFinishedShow: () => {},
  deleteShow: () => {},
  getShow: () =>{},
  getFinishedShow: () =>{},
  updateShow: ()=>{},
  updateFinishedShow: () =>{},
 
})
