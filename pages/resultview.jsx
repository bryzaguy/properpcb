var React = require('react'),
  $ = require('jquery');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      results: []
    }
  },
  componentDidMount: function () {
    $.getJSON( "data/test.json", function( data ) {
      this.setState({results: data});
    });
  },
  render: function () {
    var results = this.state.results.map(function (r) {
      return (<div>
          <h5>{JSON.stringify(r)}</h5>
        </div>);
    })
    return (<div className="results-view">{results}</div>);
  }
});
