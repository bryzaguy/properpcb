var React = require('react'),
  Header = require('./header.jsx'),
  QuoteMain = require('./quoteMain.jsx'),
  RouteHandler = require('react-router').RouteHandler,
  Link = require('react-router').Link;

require('./quote.scss');

module.exports = React.createClass({
  submit: function () {
    window.location.href = '/#/results';
  },
  render: function () {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="product-info">
            <h2>Compare PCB prices from top venders.</h2>
            <RouteHandler {...this.props} />
            <div className="wrapper">
              <button onClick={this.submit}
                className="go-button">
                <strong>Go</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});