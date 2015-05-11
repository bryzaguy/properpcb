var React = require('react');

require('./header.scss');

module.exports = React.createClass({
  render: function () {
    return (
        <div className="splash-header">
          <img className="logo" src="/properpcb_logo.png" />
        </div>);
  }
})