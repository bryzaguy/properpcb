'use strict';

var React = require('react'),
  RouteHandler = require('react-router').RouteHandler,
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
    return (<div>
      <RouteHandler submit={this.submit}
        {...this.state.quoteRequest} />
      <Footer />
    </div>);
  }
});
