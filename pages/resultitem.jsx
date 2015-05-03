var React = require('react');
require('./resultitem.scss')

module.exports = React.createClass({
  render: function(){
    var item = this.props.item, stars = '';
    for (var i = 0; i < item.stars; i++) {
      stars += '★';
    }
    return (
        <div className="result-item">
          <div><img class="logo" src="pcb.jpg" /></div>
          <div>{item.manufacturer} - ${item.amount}</div>
          <div>{stars}</div>
          <button>Buy</button>
        </div>
      );
  }
});