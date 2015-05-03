var React = require('react'),
  Entry = require('./pages/entry.jsx'),
  Results = require('./pages/results.jsx'),
  Contact = require('./pages/contact.jsx');

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
    var page;
    if (this.state.submitted) {
      page = <Results handleGo={this.submit} />;
    } else {
      page = <Entry handleGo={this.submit} />;
    }
    return <div>{page}<Contact /></div>;
  }
});

React.render(<App />, document.getElementById('app'));