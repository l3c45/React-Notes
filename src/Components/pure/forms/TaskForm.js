import React,{useRef} from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Button,TextField,Grid} from '@mui/material'
import {FormControl,Input,Menu,MenuItem,Select,InputLabel } from '@mui/material'
import { priority } from '../../../models/levels'
 import { task } from '../../../models/task_model'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

    const validationSchema = yup.object({
        name: yup
          .string('Enter your email')
          .required('Name is required'),
        description: yup
          .string('Enter your Description')
          .max(300, 'Description should be of maximus 300 characters length')
          .required('Description is required'),
        priority: yup
          .string('Re Enter your password')
          
      });
      
      const TaskForm
      = ({add}) => {

        const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




        const nameTask=useRef("")
    const descriptionTask=useRef("")
    const taskPriority=useRef("") 

    const getData = () => {

      handleClose()
      const newTask= new task(
       nameTask.current.children[1].children[0].value,
        descriptionTask.current.children[1].children[0].value,
       taskPriority.current.children[1].value,
        false 
      )    
        add(newTask)
    }


        const formik = useFormik({
          initialValues: {
            name: "",
            description: "",
            priority:"LOW"
          },
          validationSchema: validationSchema,
          onSubmit: () => {
            getData()
          },
        })
      
        return (
<div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Create New Note
      </Button>

      <Dialog open={open} onClose={handleClose}>
  
        <DialogContent sx={{px:2,py:0,height:420,overflowY:'hidden'}}>
          

          <Grid 
             
        
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '500px' }}
            
            >

<Grid   item xs={12}>


            <form  onSubmit={(e)=>formik.handleSubmit(e)}>
            <h3>New Note</h3>
              <TextField
              sx={{my:1}}
                fullWidth
                id="name"
                name="name"
                label="Name"
                ref={nameTask}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
              sx={{my:1}}
                fullWidth
                id="description"
                name="description"
                label="Description"
                type="text"
                ref={descriptionTask}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />

<FormControl fullWidth
 sx={{my:1}}>
            <InputLabel id="priority-label">Priority</InputLabel>  
   <Select 
  
   fullWidth
   name="priority"
     id="priority"
     value={formik.values.priority}
     label="Priority"
     labelId="priority-label"
     onChange={formik.handleChange}
     ref={taskPriority}
   >
     <MenuItem value={priority.low}>Low</MenuItem>
    <MenuItem value={priority.medium}>Medium</MenuItem>
    <MenuItem value={priority.high}>High</MenuItem>
     <MenuItem value={priority.critical}>Critical</MenuItem>
   </Select>
   </FormControl>

              {/* <TextField
              sx={{my:1}}
                fullWidth
                id="verification"
                name="verification"
                label="Re enter Password"
                type="password"
                value={formik.values.verification}
                onChange={formik.handleChange}
                error={formik.touched.verification && Boolean(formik.errors.verification)}
                helperText={formik.touched.verification && formik.errors.verification}
              /> */}
              <Button sx={{':hover': {
      bgcolor: "#FFC60B",
      color: 'white',
    },bgcolor:"#FF8B00",mt:4}} variant="contained" fullWidth type="submit">
                Add
              </Button>
            </form>
          
  </Grid>
  
</Grid>
            


        </DialogContent>
        
      </Dialog>
    </div>





            
          
        );
    }



export default TaskForm





