var React = require('react'),
  InputField = require('./inputField.jsx'),
  Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (<div>
      <p>Advanced Options</p>
      <p>If your design needs any of these features, you'll need a custom quote.
Don't worry, we take care of automating this process for you!</p>
      <div className="product-info-section">
      <InputField id="tabsRouting"
        value={this.props.tabsRouting}
        onChange={this.props.onChange}
        title="Tabs / Routing"
        type="checkbox" />
      <InputField id="cutouts"
        value={this.props.cutouts}
        onChange={this.props.onChange}
        title="Cutouts"
        type="checkbox" />
      <InputField id="vscoring"
        value={this.props.vscoring}
        onChange={this.props.onChange}
        title="V-Scoring"
        type="checkbox" />
      <InputField id="blindVias"
        value={this.props.blindVias}
        onChange={this.props.onChange}
        title="Blind Vias"
        type="checkbox" />
      <InputField id="buriedVias"
        value={this.props.buriedVias}
        onChange={this.props.onChange}
        title="Buried Vias"
        type="checkbox" />
      <InputField id="counterbore"
        value={this.props.counterbore}
        onChange={this.props.onChange}
        title="Counterbore"
        type="checkbox" />
      <InputField id="countersink"
        value={this.props.countersink}
        onChange={this.props.onChange}
        title="Countersink"
        type="checkbox" />
      <InputField id="controlledImpedence"
        value={this.props.controlledImpedence}
        onChange={this.props.onChange}
        title="Controlled Impedance"
        type="checkbox" />
      <InputField id="controlledDielectric"
        value={this.props.controlledDielectric}
        onChange={this.props.onChange}
        title="Controlled Dielectric"
        type="checkbox" />
      <InputField id="bevel"
        value={this.props.bevel}
        onChange={this.props.onChange}
        title="Bevel"
        type="checkbox" />
      <InputField id="platedEdges"
        value={this.props.platedEdges}
        onChange={this.props.onChange}
        title="Plated Edges"
        description="(Gold Fingers)"
        type="checkbox" />
      <InputField id="platedSlots"
        value={this.props.bevel}
        onChange={this.props.onChange}
        title="Plated Slots"
        type="checkbox" />
      </div>
    </div>);
  }
});