var React = require('react'),
  Entry = require('./pages/entry.jsx'),
  Results = require('./pages/results.jsx'),
  Footer = require('./pages/footer.jsx');

require('./app.scss');

var App = React.createClass({
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

React.render(<App />, document.getElementById('app'));