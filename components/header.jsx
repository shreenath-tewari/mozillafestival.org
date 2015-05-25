var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ImageTag = require('./imagetag.jsx');

var Header = React.createClass({
  componentDidMount: function() {
    var tabzillaContainer = this.refs.tabzillaContainer.getDOMNode();
    var tabzilla = document.querySelector("#tabzilla");
    tabzillaContainer.appendChild(tabzilla);
  },
  componentWillUnmount: function() {
    var tabzilla = this.refs.tabzillaContainer.getDOMNode().querySelector("#tabzilla");
    var widgetContainer = document.querySelector(".widgets");
    widgetContainer.appendChild(tabzilla);
  },
  render: function() {
    var logoImage = this.props.logoImage || "/assets/images/logo-mozilla-festival.svg";
    return (
      <div className="header">
        <div className="header-content">
          <div className="nav-home">
            <Link to="home">
              <ImageTag src1x={logoImage}
                alt="mozfest logo"/>
            </Link>
          </div>
          <div className="nav-items">
            <Link to="proposals">call for proposals</Link>
            <Link to="tickets">tickets</Link>
            <Link to="location">location</Link>
            <div ref="tabzillaContainer" className="mozfest-tabzilla-container"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
