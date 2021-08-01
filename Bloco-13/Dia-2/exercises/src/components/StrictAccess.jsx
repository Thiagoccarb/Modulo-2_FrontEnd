import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class StrictAccess extends Component {
  render() {
    if (this.props.user.username === 'joão' && this.props.user.password === '1234') {
      return (
        <p>Bem-vindo, João</p>
      )
    }
    return (
      <Redirect to="/" />
    )
  }
}