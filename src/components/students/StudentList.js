import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
export default class StudentList extends Component{
  render(){
    return(
      <section className="students">
      {
        this.props.students.map(student => 
          <div key={student.id}>
            <h2>
              {student.firstName} {student.lastName}
            </h2>

            <Link className="nav-link" to={`/students/${student.id}/edit`}>Edit</Link>
          </div>
        )
      }
      </section>
    )
  }
}