import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import StudentList from './students/StudentList'
import StudentManager from '../modules/StudentManager'
import StudentForm from './students/StudentForm'
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
  updateStudent = (studentId, editedStudentObj) => {
    return StudentManager.put(studentId, editedStudentObj)
    .then(() => StudentManager.getAll())
    .then(students => {
      this.setState({
        students:students
      })
    })
  }
  render(){
    return(
        <>
          <Route exact path='/students' render={(props) => {
            return <StudentList students={this.state.students} />
          }} />
          <Route exact path='/students/:studentId(\d+)/edit' render={(props => {
            return <StudentForm {...props} updateStudent = {this.updateStudent}/>
          })} />
        </>
    )
  } 
}