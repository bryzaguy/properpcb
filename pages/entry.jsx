var React = require('react');

module.exports = React.createClass({
  go: function () {
    this.props.handleGo({
      values: {},
      submitted: true
    });
  },
  componentDidMount: function () {},
  render: function () {
    return (
      <div>
        <div className="splash-header">
          <img className="logo" src="/properpcb_logo.png" />
        </div>
        <div className="container">
          <form className="product-info">
            <h2>Compare PCB prices from top venders.</h2>
            <label>Please enter board size:</label>
            <br />
            <input className="input-thin" type="number" value="4" /> X <input className="input-thin" type="number" value="8" />
            <br />
            <div className="float-input float-input-left">
              <label>Quantity:</label>
              <br />
              <input className="input-thin" type="number" value="10" />
            </div>
            <div className="float-input float-input-right">
              <label>Lead Time:</label>
              <br />
              <select className="input-thin">
                <option>Any</option>
                <option>1 Week</option>
                <option>2 Weeks</option>
              </select>
            </div>
            <br />
            <div className="wrapper">
              <button className="go-button" 
                      onClick={this.go}>
                      <strong>Go</strong>
              </button>
            </div>
          </form>
        </div>
        <div className="tint-overlay"></div>
        <div id="siteWrapper" className="clearfix">
          <video autoPlay loop poster="http://www.piedpiper.com/assets/header-fallback-large.jpg" id="bgvid">
            <source src="http://www.piedpiper.com/assets/whiteboard-drawing-01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
});