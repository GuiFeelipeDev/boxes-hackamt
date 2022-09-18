import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Panel from "../pages/panel"
import Alunos from "../pages/alunos"
import Alunost from "../pages/alunost"
import Turmas from "../pages/turmas"
import Login from "../pages/login"
import Confirm from "../pages/confirm"
import Graficos from "../pages/graficos"
const index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/login"} element={<Login />} />
          <Route
            path={process.env.PUBLIC_URL + "/confirm"}
            element={<Confirm />}
          />
          <Route path={process.env.PUBLIC_URL + "/panel"} element={<Panel />}>
            <Route path={"graficos"} element={<Graficos />} />
            <Route path={"turmas"} element={<Turmas />} />
            <Route path={"6anoa"} element={<Alunos />} />
            <Route path={"6anoat"} element={<Alunost />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default index
