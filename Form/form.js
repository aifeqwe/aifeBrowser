import React, { Component } from 'react';

class Form extends Component {
  state = {
    url: '',
  }

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.url);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.url} onChange={this.handleChange} />
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default Form;