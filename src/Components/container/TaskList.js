import React ,{useState,useEffect}from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Task from '../pure/Task';
import {task} from '../../models/task_model';
import {priority} from '../../models/levels';
import TaskForm from '../pure/forms/TaskForm';



function TaskList() {

const task1=new task("Mañana","Ir al Super",priority.low)
const taskSaved = JSON.parse(localStorage.getItem('tasks'));

    const [tasks, setTasks] = useState(taskSaved || [task1])

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    

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

      const addTask = (task) => {
  const temp =[...tasks]
 temp.push(task)
 setTasks(temp)
  
      }

  return (
    <Container sx={{mt:10}} >
     <Grid container spacing={2}>
     {tasks.length===0? 
   
      <h3 className='empty-title'> No hay tareas</h3>
    
    :
     tasks.map((task,index) => {
        return (
            <Grid key={index} item xs={12} md={6} lg={4}>
      <Task data={task} removeTask={removeTask} toggle={toggleTask}></Task>
        </Grid>
        )
     })}
        
       

     
     </Grid>

     <TaskForm add={addTask}></TaskForm>
    </Container>
   
    
  )
}

export default TaskList