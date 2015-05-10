var React = require('react');

require('./inputField.scss');

module.exports = React.createClass({
  handleChange: function (e) {
    this.props.onChange(this.props.name, e.target.value);
  },
  render: function () {
    var props = this.props;
    return (<div className="input-field">
        <label>{props.title}</label>
        <div className="input-field__desc">
          {props.description}
        </div>
        <input type={props.type || 'text'}
          value={this.props.value}
          onChange={this.handleChange} />
      </div>);
  }
})