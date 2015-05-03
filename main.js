var React = require('react'),
  Entry = require('./pages/entry.jsx'),
  Results = require('./pages/results.jsx');

require('./app.scss');

var App = React.createClass({
  getInitialState: function () {
    return {};
  },
  submit: function (values) {
    this.setState({
      values: values,
      submitted: true
    });
  },
  render: function () {
    if (this.state.submitted) {
      return <Results handleGo={this.submit} />;
    } else {
      return <Entry handleGo={this.submit} />;
    }
  }
});

React.render(<App />, document.getElementById('app'));