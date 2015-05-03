var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
  <form className="product-info">
    <h2>Compare PCB prices for top venders.</h2>
    <label>Please enter board size:</label>
    <br />
    <input className="input-thin" type="number" value="4" /> X <input className="input-thin" type="number" value="8" />
    <br />
    <div style="float:left">
      <label>Quantity:</label>
      <br />
      <input className="input-thin" type="number" value="10" />
    </div>
    <div style="float: left">
      <label>Lead Time:</label>
      <br />
      <select className="input-thin">
        <option>Any</option>
        <option>1 Week</option>
        <option>2 Weeks</option>
      </select>
    </div>
    <div className="wrapper">
      <button className="progress-button" data-style="rotate-side-up" data-perspective data-horizontal><strong>Go!</strong></button>
    </div>
  </form>
</div>
    );
  }
});

React.render(<App />, document.getElementById('app'));