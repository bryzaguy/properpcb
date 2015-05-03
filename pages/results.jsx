var React = require('react'),
  SidePanel = require('./sidepanel.jsx'),
  ResultView = require('./resultview.jsx');

module.exports = React.createClass({
  render: function () {
    return (<div className="container">
      <SidePanel />
      <ResultView />
    </div>);
  }
});