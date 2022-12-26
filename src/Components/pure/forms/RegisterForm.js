import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Grid } from "@mui/material";
import { User } from "../../../models/user_model";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  verification: yup
    .string("Re Enter your password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

const RegisterForm = () => {

  const saveUser= (user) => {

    const newUser= new User(user.email,user.password)

   
    localStorage.setItem('perfil', JSON.stringify(newUser))

  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      verification: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      saveUser(values)
    },
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid className="form-login" item xs={8}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Register</h2>
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
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="verification"
            name="verification"
            label="Re enter Password"
            type="password"
            value={formik.values.verification}
            onChange={formik.handleChange}
            error={
              formik.touched.verification && Boolean(formik.errors.verification)
            }
            helperText={
              formik.touched.verification && formik.errors.verification
            }
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

export default RegisterForm;
