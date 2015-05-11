var React = require('react'),
  InputField = require('./inputField.jsx'),
  Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (<div>
              <div className="product-info-section">
                <InputField id="boardLayers"
                  value={this.props.boardLayers}
                  type="number"
                  title="Layers *"
                  description="How many layers are in your design?"
                  onChange={this.props.onChange} />
                <div className="product-info-clear" />
              </div>
              <div className="product-info-section">
                <InputField id="boardWidth"
                  value={this.props.boardWidth} 
                  type="number"
                  title="X Dimension (inches) *"
                  description="How wide is your board?"
                  onChange={this.props.onChange}/>
                <InputField id="boardHeight"
                  value={this.props.boardHeight} 
                  type="number"
                  title="Y Dimension (inches) *"
                  description="How tall is your board?"
                  onChange={this.props.onChange}/>
                <div className="product-info-clear" />
              </div>
              <div className="product-info-section">
                <InputField id="quantity"
                  value={this.props.quantity} 
                  type="number"
                  title="Quantity *"
                  description="How many boards do you need?"
                  onChange={this.props.onChange}/>
                <InputField id="leadTimeDays"
                  value={this.props.leadTimeDays} 
                  type="number"
                  title="Lead Time *"
                  description="How many business days can you wait for your board to be manufactured?"
                  onChange={this.props.onChange}/>
                <div className="product-info-clear" />
                <br />
                <Link to="quote-step2">More Options</Link>
              </div>
            </div>);
  }
});