var React = require('react'),
  Header = require('./header.jsx'),
  QuoteMain = require('./quoteMain.jsx'),
  RouteHandler = require('react-router').RouteHandler,
  Link = require('react-router').Link;

require('./quote.scss');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      boardWidth: 4,
      boardHeight: 8,
      quantity: 10,
      leadTimeDays: 5,
      boardLayers: 2,
      traceWidth: 8,
      traceSpacing: 8,
      outerCopperPour: 1,
      innerCopperPour: 1,
      minDrillDiameter: 16,
      minAnnularRingRadius: 8,
      electricalTest: true,
      boardMaterial: "FR4",
      boardFinish: "HASL",
      silkScreen: ["Top Layer"],
      soldermask: true
    };
  },
  onChange: function (e) {
    var prop = {};
    prop[e.target.id] = e.target.value;
    this.setState(prop);
  },
  submit: function () {
    this.props.submit(this.state);
    window.location.href = '/#/results';
  },
  render: function () {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="product-info">
            <h2>Compare PCB prices from top venders.</h2>
            <RouteHandler {...this.state}
              onChange={this.onChange} />
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