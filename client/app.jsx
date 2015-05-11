'use strict';

var React = require('react'),
  Entry = require('./entry.jsx'),
  Results = require('./results.jsx'),
  Footer = require('./footer.jsx');

require('./app.scss');

module.exports = React.createClass({
  getInitialState: function () {
    return {};
  },
  submit: function (request) {
    this.setState({
      quoteRequest: request
    });
  },
  render: function () {
    var page;
    if (this.state.quoteRequest) {
      page = <Results handleGo={this.submit} />;
    } else {
      page = <Entry handleGo={this.submit} />;
    }
    return <div>{page}<Footer /></div>;
  }
});
