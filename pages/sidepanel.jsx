var React = require('react');

require('./sidepanel.scss');

module.exports = React.createClass({
  render: function () {
    return (<div className="side-panel">
        <img src="properlogo.png" />
        <form>
          <div>
            <label>
              <span>Quantity: 10</span>
              <br />
              <input type="range" />
            </label>
          </div>
          <div>
            <label>
              <span>Lead Time: 5</span>
              <br />
              <input type="range" />
            </label>
          </div>
          <div>
            <label>
              <span>Rating: 4</span>
              <br />
              <input type="range" />
            </label>
          </div>
        </form>
      </div>);
  }
});
