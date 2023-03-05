import React, { Component } from 'react';
import Form from './Form/form';
import Page from './Page/page';

class App extends Component {
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

export default App;