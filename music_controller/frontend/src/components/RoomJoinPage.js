import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    roomCode: "",
    error: ""
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.roomButtonPressed = this.handleTextFieldChange.bind(this);
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} alignItems="center">
          <Typography varient="h4" component="h4">
            Join a Room
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center">
          <TextField
          error={this.state.error}
          label="Code"
          placeholder="Enter a Room Code"
          value={this.state.roomCode}
          helperText={this.state.error}
          varient="outlined"
          onChange={this.handleTextFieldChange}
          />

        </Grid>
        <Grid item xs={12} alignItems="center">
          <Button varient="contained" color="primary" onClick={this.roomButtonPressed}>
            Enter Room
            </Button>
        </Grid>
        <Grid item xs={12} alignItems="center">
        <Button varient="contained" color="secondary" to="/" component={Link}>
          Back
          </Button>
        </Grid>
      </Grid>
    );
  }

  handleTextFieldChange(e) {
    this.setState({
      roomCode: e.target.value
    });
  }

  roomButtonPressed()
}