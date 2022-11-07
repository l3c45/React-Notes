import { Container } from "@mui/material";
import TaskList from "./Components/container/TaskList";
import "./App.css";
import ResponsiveAppBar from "./Components/container/nav";
import LoginForm from "./Components/pure/forms/LoginForm";
import RegisterForm from "./Components/pure/forms/RegisterForm";

function App() {
  return (
    <Container>
      <ResponsiveAppBar></ResponsiveAppBar>
      <TaskList></TaskList>
      {/* <LoginForm></LoginForm> */}
      {/* <RegisterForm></RegisterForm> */}
    </Container>
  );
}

export default App;
