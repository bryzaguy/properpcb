var React = require('react');

require('./contact.scss');

module.exports = React.createClass({
  render: function () {
    return <div className="contact-footer"><a href="email:support@properpcb.com">Contact</a></div>;
  }
});
