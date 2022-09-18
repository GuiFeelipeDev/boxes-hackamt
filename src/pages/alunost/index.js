import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { BiCheck, BiX } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import { GrFormRefresh } from "react-icons/gr"
import { Box } from "@mui/system"

const turmas = [
  {
    nome: "Ana Maria",
    matricula: "13654985756491",
    checkin: "..",
    checkout: "..",
    presente: false,
  },

  {
    nome: "Bruno Lima",
    matricula: "23165498495164",
    checkin: <BiCheck style={{ fontSize: "30px", color: "green" }} />,
    checkout: "..",
    presente: true,
  },
  {
    nome: "Carlos Eduardo da Cruz",
    matricula: "32684951656351",
    checkin: "..",
    checkout: "..",
    presente: false,
  },

  {
    nome: "Fabio Ruver",
    matricula: "15498497951986",
    checkin: <BiCheck style={{ fontSize: "30px", color: "green" }} />,
    checkout: "..",
    presente: true,
  },
  {
    nome: "Guilherme Felipe Pereira",
    matricula: "21654621619495",
    checkin: <BiCheck style={{ fontSize: "30px", color: "green" }} />,
    checkout: "..",
    presente: true,
  },
  {
    nome: "Janaina Toredo Machado",
    matricula: "95487484951648",
    checkin: "..",
    checkout: "..",
    presente: false,
  },
  {
    nome: "Leonardo Ribeiro Alcantara",
    matricula: "75169693465158",
    checkin: "..",
    checkout: "..",
    presente: false,
  },
  {
    nome: "Nicolas Gabriel Meneses de Jesus",
    matricula: "65951654987951",
    checkin: <BiCheck style={{ fontSize: "30px", color: "green" }} />,
    checkout: "..",
    presente: true,
  },
  {
    nome: "Ricardo Pulquerio de Campos",
    matricula: "15649852231659",
    checkin: <BiCheck style={{ fontSize: "30px", color: "green" }} />,
    checkout: "..",
    presente: true,
  },
  {
    nome: "Samira Paola",
    matricula: "62598745862569",
    checkin: <BiCheck style={{ fontSize: "30px", color: "green" }} />,
    checkout: "..",
    presente: true,
  },
]

const Index = () => {
  let navigate = useNavigate()
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <GrFormRefresh
          style={{
            fontSize: "30px",
            marginBottom: "10px",
            marginRight: "10px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/panel/6anoat")}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ minWidth: 650, "& th": { fontSize: "18px" } }}>
              <TableCell>Nº</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Entrada</TableCell>
              <TableCell align="center">Saída</TableCell>
              <TableCell align="center">Matricula</TableCell>
              <TableCell align="right">Presente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {turmas.map((turma, index) => (
              <TableRow
                key={turma.nome}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& th, td": { fontSize: "18px" },
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {turma.nome}
                </TableCell>
                <TableCell component="th" align="center" scope="row">
                  {turma.checkin}
                </TableCell>
                <TableCell component="th" align="center" scope="row">
                  {turma.checkout}
                </TableCell>
                <TableCell component="th" align="center" scope="row">
                  {turma.matricula}
                </TableCell>

                <TableCell align="right" scope="row">
                  {turma.presente && (
                    <BiCheck
                      style={{ fontSize: "30px", color: "rgb(212, 160, 16)" }}
                    />
                  )}
                  {!turma.presente && (
                    <BiX style={{ fontSize: "30px", color: "red" }} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Index
