import axios from "axios"
import React from "react"

const Index = () => {
  const nome = "Nicolas Gabriel Meneses de Jesus"
  const matricula = "65951654987951"
  const checkin = new Date().toLocaleString()
  const checkout = ".."
  const presente = true

  axios.post(
    "https://sheet.best/api/sheets/c8b0be38-8a64-43ee-bc61-4e1211820d4f",
    {
      nome,
      matricula,
      checkin,
      checkout,
      presente,
    }
  )
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://aogdesign.com.au/wp-content/uploads/2019/02/checkmark.gif"
        alt="confirm"
        style={{ width: "auto", height: "100vh" }}
      />
    </div>
  )
}

export default Index
