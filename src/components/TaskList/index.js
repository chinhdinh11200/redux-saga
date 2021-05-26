import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "../../containers/TaskBoard/styles";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    const { classes, status, tasks } = this.props;
    return (
      <Grid item md={4} key={status.value}>
        <Box mt={3} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task, index) => (
            <TaskItem task={task} status={status} key={task.id} i={index} />
          ))}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
