import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StudentList from './students/StudentList'
import StudentManager from '../modules/StudentManager'
export default class StudentViews extends Component{

  state = {
    students: []
  }

  componentDidMount(){
    StudentManager.getAll().then(allStudents => {
      this.setState({
        students:allStudents
      })
    })
  }
  render(){
    return(
        <>
          <Route exact path='/students' render={(props) => {
            return <StudentList students={this.state.students} />
          }} />
        </>
    )
  } 
}