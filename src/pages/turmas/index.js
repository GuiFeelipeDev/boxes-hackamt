import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { BiSearchAlt } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const turmas = [
  { nome: "6º Ano", tag: "A", periodo: "Matutino", link: "6anoa" },
  { nome: "9º Ano", tag: "B", periodo: "Matutino", link: "" },
]

const Index = () => {
  let navigate = useNavigate()
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ minWidth: 650, "& th": { fontSize: "18px" } }}>
            <TableCell>Turma</TableCell>
            <TableCell align="right">Tag</TableCell>
            <TableCell align="right">Periodo</TableCell>
            <TableCell align="right">Acessar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {turmas.map((turma) => (
            <TableRow
              key={turma.nome}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "& th, td": { fontSize: "18px" },
              }}
            >
              <TableCell component="th" scope="row">
                {turma.nome}
              </TableCell>
              <TableCell align="right">{turma.tag}</TableCell>
              <TableCell align="right">{turma.periodo}</TableCell>
              <TableCell align="right">
                <BiSearchAlt
                  style={{
                    fontSize: "20px",
                    color: "green",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/panel/" + turma.link)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Index
