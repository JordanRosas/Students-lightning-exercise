import React, { Component } from 'react'
import StudentViews from './StudentViews'
import NavBar from './nav/Navbar';
//will call navbar and student views
export default class Students extends Component{
  render(){
    return(
      <>
        <NavBar />
        <StudentViews />
      </>
    )
  }
}