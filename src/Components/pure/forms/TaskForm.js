import React from 'react'
import {Grid,FormControl,Input,Button,Menu,MenuItem,Select,InputLabel } from '@mui/material'

const TaskForm = () => {
  return (
    <Grid
  container
  spacing={0}
  direction="row"
  alignItems="center"
  justifyContent={"center"}
  style={{ height: '100vh' }}
>

  
  <FormControl sx={{width:1/2}}>
    
    <Input sx={{my:3}} id="name" aria-describedby="my-helper-text" placeholder='Name' />
    
    <Input sx={{my:3}} id="description" aria-describedby="my-text" placeholder="Description" />

    <InputLabel id="category">Priority</InputLabel>
  <Select sx={{my:3}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={12}
    label="Age"
   
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
    <Button variant="contained">Add Note</Button>
  </FormControl>
   

</Grid> 


    
  
  )
}

export default TaskForm