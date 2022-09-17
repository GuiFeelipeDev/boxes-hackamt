import { Button } from "@mui/material"
import { Box } from "@mui/system"
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
        <Button
          variant="contained"
          sx={{ width: "250px", height: "80px" }}
          onClick={() => navigate("/login")}
        >
          Professor
        </Button>
      </Box>
    </>
  )
}

export default Index
