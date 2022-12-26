import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button,Box } from "@mui/material";
import RegisterForm from '../../Components/pure/forms/RegisterForm'

export const Register = () => {

    const navigate=useNavigate()
  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <RegisterForm></RegisterForm>
    <Button
      onClick={() => navigate("/")}
      sx={{my:0,color:"white"}}
      >Volver a Login</Button>
  
  </Box>

  )
}
