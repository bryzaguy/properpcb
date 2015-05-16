var React = require('react'),
  QuoteSide = require('./quoteSide.jsx'),
  QuoteStd = require('./quoteStd.jsx'),
  QuoteAdv = require('./quoteAdv.jsx');

require('./sidepanel.scss');

module.exports = React.createClass({
  render: function () {
    return (<div className="side-panel">
        <img className="logo-letter" src="properlogo.png" />
        <QuoteSide {...this.props} />
        <QuoteStd {...this.props} />
        <QuoteAdv {...this.props} />
      </div>);
  }
});
