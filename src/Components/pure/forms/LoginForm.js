import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Grid } from "@mui/material";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  // const userEmail=useRef("")
  // const userPass=useRef("")
const navigate=useNavigate()
const localStorage = window.localStorage;
  
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
  const saved=JSON.parse(localStorage.getItem("perfil"))
if(saved.email===values.email && saved.password===values.password){
  navigate("/home");
}else{
  alert("CREDENCIALES INVALIDAS")
}
    },
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid className="form-login" item xs={6}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Login</h2>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            sx={{
              ":hover": {
                bgcolor: "#FFC60B",
                color: "white",
              },
              bgcolor: "#FF8B00",
            }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
          
        </form>
        
      </Grid>
    </Grid>
  );
};

export default LoginForm;
