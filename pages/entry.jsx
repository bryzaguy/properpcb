var React = require('react'),
  Header = require('./header.jsx'),
  VideoBg = require('./videoBg.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      boardWidth: 4,
      boardHeight: 8,
      quantity: 10,
      leadTime: ''
    };
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
  handleChange: function (e) {
    var prop = {}, id = e.target.id;
    prop[id] = e.target.value;
    this.setState(prop);
  },
  render: function () {
    return (
      <div>
        <Header />
        <div className="container">
          <form className="product-info">
            <h2>Compare PCB prices from top venders.</h2>
            <label>Please enter board size (inches):</label>
            <br />
            <input className="input-thin" 
              id="boardWidth"
              value={this.state.boardWidth}
              onChange={this.handleChange} /> X 
            <input className="input-thin" 
              id="boardHeight"
              value={this.state.boardHeight}
              onChange={this.handleChange} />
            <br />
            <div className="float-input float-input-left">
              <label>Quantity:</label>
              <br />
              <input className="input-thin" 
                id="quantity"
                value={this.state.quantity}
                onChange={this.handleChange} />
            </div>
            <div className="float-input float-input-right">
              <label>Lead Time:</label>
              <br />
              <select className="input-thin" 
                id="leadTime"
                value={this.state.leadTime} 
                onChange={this.handleChange}>
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
        <VideoBg />
      </div>
    );
  }
});