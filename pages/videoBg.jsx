var React = require('react');

require('./videoBg.scss');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="tint-overlay"></div>
        <div id="siteWrapper" className="clearfix">
          <video autoPlay loop id="bgvid">
            <source src="http://www.piedpiper.com/assets/whiteboard-drawing-01.mp4" type="video/mp4" />
          </video>
        </div>
      </div>);
  }
})