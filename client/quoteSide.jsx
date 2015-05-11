var React = require('react'),
  InputField = require('./inputField.jsx');

module.exports = React.createClass({
  render: function () {
    return (<div>
              <InputField id="boardLayers"
                value={this.props.boardLayers}
                type="number"
                title="Layers"
                onChange={this.props.onChange} />
              <InputField id="boardWidth"
                value={this.props.boardWidth} 
                type="number"
                title="X Dimension (inches)"
                onChange={this.props.onChange}/>
              <InputField id="boardHeight"
                value={this.props.boardHeight} 
                type="number"
                title="Y Dimension (inches)"
                onChange={this.props.onChange}/>
              <InputField id="quantity"
                value={this.props.quantity} 
                type="number"
                title="Quantity"
                onChange={this.props.onChange}/>
              <InputField id="leadTimeDays"
                value={this.props.leadTimeDays} 
                type="number"
                title="Lead Time"
                onChange={this.props.onChange}/>
            </div>);
  }
});