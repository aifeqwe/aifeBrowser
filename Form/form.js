import React, { Component, Input, Form, Button } from 'react';

class B_Form extends Component {
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
      <Form onSubmit={this.handleSubmit}>
        <Input type="text" value={this.state.url} onChange={this.handleChange} />
        <Button type="submit">Go</Button>
      </Form>
    );
  }
}

export default B_Form;