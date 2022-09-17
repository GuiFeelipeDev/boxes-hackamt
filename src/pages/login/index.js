import { Box, Button, FormGroup, TextField, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

const Index = () => {
  let navigate = useNavigate()
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "500px",
            backgroundColor: "rgba(240, 240, 240, 0.9)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <FormGroup
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              height: "inherit",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3">Login</Typography>
            <TextField
              id="outlined-basic"
              label="Usuário (CPF)"
              variant="outlined"
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Senha"
              type="password"
              variant="outlined"
            ></TextField>
            <Button variant="contained" onClick={() => navigate("/panel")}>
              Entrar
            </Button>
          </FormGroup>
        </Box>
      </Box>
    </>
  )
}

export default Index
