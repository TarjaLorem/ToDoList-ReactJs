import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        <b>{this.props.project.title}</b>: {this.props.project.category} <button type="button" onClick={this.deleteProject.bind(this, this.props.project.id)}>Remove</button>
      </li>
    );
  }
}

export default ProjectItem;
