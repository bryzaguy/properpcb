var React = require('react'),
  Header = require('./header.jsx'),
  InputField = require('./inputField.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      boardWidth: 4,
      boardHeight: 8,
      quantity: 10,
      leadTime: 5,
      layers: 2
    };
  },
  go: function (e) {
    e.preventDefault();
    this.props.handleGo(this.state);
  },
  handleChange: function (name, value) {
    var prop = {};
    prop[name] = value;
    this.setState(prop);
  },
  render: function () {
    return (
      <div>
        <Header />
        <div className="container">
          <form className="product-info">
            <h2>Compare PCB prices from top venders.</h2>

            <div className="product-info-section">
              <InputField name="layers"
                value={this.state.layers}
                type="number"
                title="Layers *"
                description="How many layers are in your design?"
                onChange={this.handleChange} />
              <div className="product-info-clear" />
            </div>
            <div className="product-info-section">
              <InputField name="boardWidth"
                value={this.state.boardWidth} 
                type="number"
                title="X Dimension (inches) *"
                description="How wide is your board?"
                onChange={this.handleChange}/>

              <InputField name="boardHeight"
                value={this.state.boardHeight} 
                type="number"
                title="Y Dimension (inches) *"
                description="How tall is your board?"
                onChange={this.handleChange}/>
              <div className="product-info-clear" />
            </div>
            <div className="product-info-section">
              <InputField name="quantity"
                value={this.state.quantity} 
                type="number"
                title="Quantity *"
                description="How many boards do you need?"
                onChange={this.handleChange}/>

              <InputField name="leadTime"
                value={this.state.leadTime} 
                type="number"
                title="Lead Time *"
                description="How many business days can you wait for your board to be manufactured?"
                onChange={this.handleChange}/>
              <div className="product-info-clear" />
            </div>

            <div className="wrapper">
              <button className="go-button" 
                onClick={this.go}>
                <strong>Go</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});