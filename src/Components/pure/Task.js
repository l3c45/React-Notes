import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css";

import { Delete, Check, PendingActions } from "@mui/icons-material";

const Task = ({ data, removeTask, toggle }) => {
  const remove = (itemToRemove) => {
    console.log("delete");
    removeTask(itemToRemove);
  };

  const toggleStatus = (itemToToggle) => {
    toggle(itemToToggle);
  };

  const completeStyle = {
    position: "absolute",
    right: "10px",
    backgroundColor: " #00ff0c",
    padding: "5px",
  };
  const pendingStyle = {
    position: "absolute",
    right: "10px",
    backgroundColor: " #ffc300 ",
    padding: "5px",
  };
  return (
    <Card>
      <CardHeader
        sx={{
          bgcolor: " #FFC300 ",
          displayPrint: "flex",
        }}
        title={data.name}
        subheader={data.priority}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} component="div">
          {data.description}
        </Typography>
        <Typography color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => remove(data)} sx={{ color: "red" }} size="small">
          <Delete />
        </Button>

        <Button onClick={() => toggleStatus(data)}>
          {!data.completed ? (
            <Check sx={{ color: "green" }} />
          ) : (
            <PendingActions sx={{ color: "orange" }} />
          )}
        </Button>

        <Typography
          style={data.completed ? completeStyle : pendingStyle}
          color="text.secondary"
        >
          {data.completed ? "COMPLETE" : "PENDING"}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Task;
