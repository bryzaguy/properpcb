var React = require('react'),
  $ = require('jquery');

require('./resultview.scss');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      results: []
    }
  },
  componentDidMount: function () {
    $.getJSON( "data/quotes.json", function( data ) {
      this.setState({results: data});
    }.bind(this));
  },
  render: function () {
    var results = this.state.results.map(function (r, i) {
      return (<div className="result-item" key={i}>
          <p>{JSON.stringify(r)}</p>
        </div>);
    })
    return (<div className="results-view">{results}</div>);
  }
});
