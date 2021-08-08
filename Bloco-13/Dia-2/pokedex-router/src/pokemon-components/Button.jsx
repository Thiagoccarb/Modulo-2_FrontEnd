import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type, className, onClick } = this.props;
    return (
      <div>
        <button
          onClick={onClick}
          className={className}>
          {type}
        </button>
      </div>
    )
  }
};

export default Button;