var React = require('react'),
  Header = require('./header.jsx'),
  MainQuoteForm = require('./mainQuoteForm.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      boardWidth: 4,
      boardHeight: 8,
      quantity: 10,
      leadTimeDays: 5,
      boardLayers: 2
    };
  },
  go: function (e) {
    e.preventDefault();
    console.log(this.state);
    this.props.handleGo(this.state);
  },
  onChange: function (e) {
    var prop = {};
    prop[e.target.id] = e.target.value;
    this.setState(prop);
  },
  render: function () {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="product-info">
            <h2>Compare PCB prices from top venders.</h2>
            <MainQuoteForm {...this.state}
              onChange={this.onChange} />
            <div className="wrapper">
              <button className="go-button" 
                onClick={this.go}>
                <strong>Go</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});