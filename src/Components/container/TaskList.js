import React ,{useState}from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Task from '../pure/Task';
import {task} from '../../models/task_model';
import {priority} from '../../models/levels';



function TaskList() {

    const task1=new task("1TEST","TASK FOR TESTING",priority.low)
const task2=new task("2TEST2","MORE DATAdfdfdfdfdfdfdfdfdfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaa",priority.low)
const task3=new task("3TEST","TASK FOR TESTING",priority.critical)
const task4=new task("4TEST","TASK FOR TESTING",priority.high)
const task5=new task("5TEST2","MORE DATAdfdfdfdfdfdfdfdfdfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaa",priority.low)
const task6=new task("6TEST","TASK FOR TESTING",priority.medium)

    const [tasks, setTasks] = useState([task1,task2,task3,task4,task5,task6])

    const removeTask = (taskToRemove) => {
      const temp=[...tasks]
      const removedTask=temp.filter(task=> task!==taskToRemove)
        setTasks(removedTask)

    }

    const toggleTask = (taskToToggle) => {
        const temp=[...tasks]
        const i=temp.indexOf(taskToToggle)
        temp[i].completed=!temp[i].completed
        setTasks(temp)
  
      }

  return (
    <Container >
     <Grid container spacing={2}>
     {tasks.map((task,index) => {
        return (
            <Grid key={index} item xs={12} md={6} lg={4}>
      <Task data={task} removeTask={removeTask} toggle={toggleTask}></Task>
        </Grid>
        )
     })}
        
       

     
     </Grid>
    </Container>
    
  )
}

export default TaskList