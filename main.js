var React = require('react');

require('./app.scss');

var Entry = React.createClass({
  render: function () {
    return (
      <div className="container">
      <form className="product-info">
      <h2>Compare PCB prices for top venders.</h2>
      <label>Please enter board size:</label>
      <br />
      <input className="input-thin" type="number" value="4" /> X <input className="input-thin" type="number" value="8" />
      <br />
      <div class="float-input">
        <label>Quantity:</label>
        <br />
        <input className="input-thin" type="number" value="10" />
      </div>
      <div class="float-input">
        <label>Lead Time:</label>
        <br />
        <select className="input-thin">
          <option>Any</option>
          <option>1 Week</option>
          <option>2 Weeks</option>
        </select>
      </div>
      <div className="wrapper">
        <button className="progress-button" 
                data-style="rotate-side-up" 
                data-perspective 
                data-horizontal>
                <strong>Go!</strong>
        </button>
      </div>
    </form>
  </div>
    );
  }
});

var Results = React.createClass({
  render: function () {
    return <div>STUFFS</div>;
  }
});

var App = React.createClass({
  getInitialState: function () {
    return {};
  },
  submit: function (values) {
    this.setState({
      values: values,
      submitted: true
    });
  },
  render: function () {
    if (this.state.submitted) {
      return <Results />;
    } else {
      return <Entry />;
    }
  }
});

React.render(<App />, document.getElementById('app'));