import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}