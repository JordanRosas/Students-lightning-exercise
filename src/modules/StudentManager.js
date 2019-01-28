let baseURL = "http://localhost:5002"

export default{
  getAll(){
    return fetch(`${baseURL}/students`).then(res => res.json())
  }
}
