import React, { Component } from "react";
import uuid from "uuid";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: "One",
        category: "first category"
      },
      {
        id:uuid.v4(),
        title: "Two",
        category: "second category"
      },
      {
        id:uuid.v4(),
        title: "Three",
        category: "Third category"
      }
    ]});
  }

  handleAddProject(project){
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
    }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }  

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
