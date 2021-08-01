import React, { Component } from 'react';

export class Users extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <h1>Users</h1>
        <p>
          {this.props.greeting}
        </p>
        <p>
          {id}
        </p>
      </div>
    );
  }
}