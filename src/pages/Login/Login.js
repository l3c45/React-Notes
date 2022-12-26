import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/pure/forms/LoginForm";
import { Button, Box } from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <LoginForm></LoginForm>
      <Button
        onClick={() => navigate("/register")}
        sx={{my:0,color:"white"}}
        
       
     
      >
        No tienes una cuenta? Haz Click aqui para registrarte
      </Button>
    </Box>
  );
};
