var React = require('react'),
  InputField = require('./inputField.jsx');

module.exports = React.createClass({
  render: function () {
    return (<div>
      <p>Standard Options</p>
      <p>{"We have pre-populated some design specifications to ensure your design gets the best price."}</p>
      <div className="product-info-section">
        <InputField id="traceWidth"
          value={this.props.traceWidth}
          type="number"
          title="Minimum trace width"
          onChange={this.props.onChange} />
        <InputField id="traceSpacing"
          value={this.props.traceSpacing}
          type="number"
          title="Minimum trace spacing"
          onChange={this.props.onChange} />
        <InputField id="outerCopperPour"
          value={this.props.outerCopperPour}
          type="number"
          title="Outer copper pour (oz)"
          onChange={this.props.onChange} />
        <InputField id="innerCopperPour"
          value={this.props.innerCopperPour}
          type="number"
          title="Inner copper pour (oz)"
          onChange={this.props.onChange} />
        <InputField id="minDrillDiameter"
          value={this.props.minDrillDiameter}
          type="number"
          title="Minimum drill diameter (mils)"
          onChange={this.props.onChange} />
        <InputField id="minAnnularRingRadius"
          value={this.props.minAnnularRingRadius}
          type="number"
          title="Minimum annular ring radius (mils)"
          onChange={this.props.onChange} />
        <InputField id="electricalTest"
          value={this.props.electricalTest}
          type="checkbox"
          title="Electrical Test"
          onChange={this.props.onChange} />
        <div className="input-field">
          <label>Material</label>
          <select id="boardMaterial" 
            value={this.props.boardMaterial}
            onChange={this.props.onChange}>
            <option value="FR4">FR4</option>
            <option value="Flex">Flex</option>
          </select>
        </div>
        <div className="input-field">
          <label>Finish</label>
          <select id="boardFinish" 
            value={this.props.boardFinish}
            onChange={this.props.onChange}>
            <option value="HASL">HASL</option>
            <option value="ENIG">ENIG</option>
            <option value="Tin Silver">Tin Silver</option>
          </select>
        </div>
        <div className="input-field">
          <label>Silkscreen</label>
          <select id="silkScreen" 
            value={this.props.silkScreen}
            onChange={this.props.onChange} multiple>
            <option value="Top Layer">Top Layer</option>
            <option value="Bottom Layer">Bottom Layer</option>
            <option value="None">None</option>
          </select>
        </div>
        <InputField id="soldermask"
          value={this.props.soldermask}
          type="checkbox"
          title="Soldermask"
          onChange={this.props.onChange} />
        <div className="product-info-clear" />
      </div>
    </div>);
  }
});