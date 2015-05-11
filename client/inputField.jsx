var React = require('react');

require('./inputField.scss');

module.exports = React.createClass({
  render: function () {
    var props = this.props;
    return (<div className="input-field">
        <label>{props.title}</label>
        <div className="input-field__desc">
          {props.description}
        </div>
        <input id={props.id}
          type={props.type || 'text'}
          value={this.props.value}
          onChange={this.props.onChange} />
      </div>);
  }
})