var React = require('react'),
  QuoteSide = require('./quoteSide.jsx');

require('./sidepanel.scss');

module.exports = React.createClass({
  getInitialState: function () {
    return this.props;
  },
  submit: function (e) {
    this.props.submit(this.state);
  },
  onChange: function (e) {
    var prop = {};
    prop[e.target.id] = e.target.value;
    this.setState(prop);
  },
  render: function () {
    return (<div className="side-panel">
        <img className="logo-letter" src="properlogo.png" />
        <QuoteSide {...this.state}
          onChange={this.onChange} />
      </div>);
  }
});
