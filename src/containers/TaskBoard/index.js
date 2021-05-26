import { Box, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { STATUS } from "../../constants";
import styles from "./styles";

const listTask = [
  {
    id: 1,
    title: "Read Book",
    description: "Read book material ui",
    status: 0,
  },

  {
    id: 2,
    title: "Read Book 2",
    description: "Read book material ui 2",
    status: 1,
  },
  {
    id: 3,
    title: "Read Book 3",
    description: "Read book material ui 3",
    status: 2,
  },
];
class TaskBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    return (
      <Grid container spacing={2}>
        {STATUS.map((status, index) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList
              key={status.id}
              tasks={taskFilter}
              status={status}
              index={index}
            />
          );
        })}
      </Grid>
    );
  }

  renderForm() {
    const { open } = this.state;
    return (
      <div>
        <TaskForm open={open} handleClose={this.handleClose} />
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Box mt={2}>
          <Button  variant="contained" color="secondary" className={classes.button} onClick={this.handleOpen} >
            <AddIcon /> thêm mới công việc
          </Button>
        </Box>

        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
