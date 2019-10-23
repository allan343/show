import React from 'react'

export default React.createContext({

  shows: [],
  finishedShows: [],
  addShow: () => {},
  addFinishedShow: () => {},
  deleteShow: () => {},
  deleteFinishedShow: () => {},
  getShow: () =>{},
  getFinishedShow: () =>{},
  updateShow: ()=>{},
  updateFinihsedShow: () =>{},
})
