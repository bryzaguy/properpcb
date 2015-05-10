var React = require('react');

require('./footer.scss');

module.exports = React.createClass({
  render: function () {
    return <div className="footer"><a href="mailto:support@properpcb.com">Contact</a></div>;
  }
});
