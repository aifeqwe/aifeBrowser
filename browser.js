import React, { Component } from 'react';
import Form from './Form';
import Page from './Page';

class Browser extends Component {
  state = {
    url: '',
  }

  handleSubmit = (url) => {
    this.setState({ url });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <Page url={this.state.url} />
      </div>
    );
  }
}

export default Browser;