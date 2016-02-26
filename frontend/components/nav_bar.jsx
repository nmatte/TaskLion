var React = require('react'),
    Link = require('react-router').Link;
    var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],
  _pushAcct: function () {
    var url = "/account/";
    this.history.push({pathname: url});
  },

  _pushDash: function () {
    var url = "/dashboard/";
    this.history.push({pathname: url});
  },

  render: function () {

    return (
      <div className="nav-bar">
        <div className="navBarThin">
          <Link to={"/dashboard/"} onClick={this._pushDash}>
            <img className="color-logo" src="assets/logo.png"/>
          </Link>

          <div className="nav-bar-link-container">
          <Link to={"/dashboard/"}
            onClick={this._pushDash}
            className="nav-bar-link">Home</Link>
          <Link to={"/account/" }
            onClick={this._pushAcct}
            className="nav-bar-link">Account</Link>
        </div>
        </div>
      </div>
    );
  }
});
