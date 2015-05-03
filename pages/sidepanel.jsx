var React = require('react');

require('./sidepanel.scss');

module.exports = React.createClass({
  render: function () {
    return (<div className="side-panel">
        <img src="properlogo.png" />
        <h3>Criteria</h3>
        <form>
        </form>
      </div>);
  }
});
