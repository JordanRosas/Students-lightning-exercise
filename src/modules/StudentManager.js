let baseURL = "http://localhost:5002"

export default{
  get(id){
    return fetch(`${baseURL}/students/${id}`).then(res => res.json())
  },
  getAll(){
    return fetch(`${baseURL}/students`).then(res => res.json())
  },
  put(studentId, existingStudent){
    return fetch(`${baseURL}/students/${studentId}`,{
      method:'PUT',
      headers:{
        "Content-Type": "application/JSON"
      },
      body:JSON.stringify(existingStudent)
      
    })
  }
}
