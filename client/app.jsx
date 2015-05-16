'use strict';

var React = require('react'),
  RouteHandler = require('react-router').RouteHandler,
  Footer = require('./footer.jsx');

require('./app.scss');

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
  submit: function (request) {
    this.setState({
      quoteRequest: request
    });
  },
  render: function () {
    return (<div>
      <RouteHandler submit={this.submit}
        {...this.state} onChange={this.onChange} />
      <Footer />
    </div>);
  }
});
