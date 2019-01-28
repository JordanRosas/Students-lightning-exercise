import React, { Component }  from 'react'

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
          </div>
        )
      }
      </section>
    )
  }
}