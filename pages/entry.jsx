var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      boardWidth: 4,
      boardHeight: 8,
      quantity: 10,
      leadTime: ''
    };
  },
  widthChange: function(e) {
    this.setState({
      boardWidth: e.target.value
    });
  },
  heightChange: function(e) {
    this.setState({
      boardHeight: e.target.value
    });
  },
  leadChange: function(e) {
    this.setState({
      leadTime: e.target.value
    });
  },
  quantityChange: function(e) {
    this.setState({
      quantity: e.target.value
    });
  },
  go: function (e) {
    e.preventDefault();
    this.props.handleGo({
      values: {
        boardWidth: this.state.boardWidth,
        boardHeight: this.state.boardHeight,
        quantity: this.state.quantity,
        leadTime: this.state.leadTime
      },
      submitted: true
    });
  },
  render: function () {
    return (
      <div>
        <div className="splash-header">
          <img className="logo" src="/properpcb_logo.png" />
        </div>
        <div className="container">
          <form className="product-info">
            <h2>Compare PCB prices from top venders.</h2>
            <label>Please enter board size (inches):</label>
            <br />
            <input className="input-thin" 
                    value={this.state.boardWidth}
                    onChange={this.widthChange} /> X 
            <input className="input-thin" 
                    value={this.state.boardHeight}
                    onChange={this.heightChange} />
            <br />
            <div className="float-input float-input-left">
              <label>Quantity:</label>
              <br />
              <input className="input-thin" 
                    value={this.state.quantity}
                    onChange={this.quantityChange}
                    ref="quantity" />
            </div>
            <div className="float-input float-input-right">
              <label>Lead Time:</label>
              <br />
              <select className="input-thin" 
                    value={this.state.leadTime} 
                    onChange={this.leadChange}>
                <option value="">Any</option>
                <option value="7">1 Week</option>
                <option value="14">2 Weeks</option>
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
          <video autoPlay loop id="bgvid">
            <source src="http://www.piedpiper.com/assets/whiteboard-drawing-01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
});