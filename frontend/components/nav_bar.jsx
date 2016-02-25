var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {


    return (
      <div className="nav-bar">
        <div className="navBarThin">
          <Link to={"/dashboard"}>
            <img className="color-logo" src="assets/logo.png"/>
          </Link>
          <Link to={"/account"} className="nav-bar-link">Account</Link>
          <Link to={"/dashboard"} className="nav-bar-link">Home</Link>
        </div>
      </div>
    );
  }
});
