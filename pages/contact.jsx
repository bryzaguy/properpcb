var React = require('react');

require('./contact.scss');

module.exports = React.createClass({
  render: function () {
    return <div className="contact-footer"><a href="mailto:support@properpcb.com">Contact</a></div>;
  }
});
