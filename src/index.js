import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Students from './components/Students'

ReactDOM.render(
  <Router>
    <Students />
  </Router>, document.querySelector("#root"));
