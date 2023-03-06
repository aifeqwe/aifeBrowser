import React, { Component } from 'react';

class Page extends Component {
  componentDidMount() {
    this.renderPage();
  }

  componentDidUpdate() {
    this.renderPage();
  }

  renderPage() {
    const iframe = this.refs.iframe;
    iframe.src = this.props.url;
  }

  render() {
    return <Iframe ref="iframe" />;
  }
}

export default Page;