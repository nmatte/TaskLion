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
    if (this.props.mode === "opaque") {
      return (
        <div className="nav-bar">
          <div className="nav-bar-thin">
            <Link to={"/dashboard/"} onClick={this._pushDash}>
              <img className="color-logo" src="assets/logo.png"/>
            </Link>

            <div className="nav-bar-link-container">
              <Link to={"/account/" }
                onClick={this._pushAcct}
                className="nav-bar-link">Account</Link>
              <Link to={"/dashboard/"}
                onClick={this._pushDash}
                className="nav-bar-link">Home</Link>
            </div>
          </div>
        </div>
      );
    } else {
      var heroStyle = {background: "gray"};
      if (this.props.imgUrl) {
        var heroStyle = {backgroundImage: 'url('+ this.props.imgUrl+')'};
      }
      return (
        <div className="thingy">
          <div className="nav-bar clear-nav-bar">
            <div className="nav-bar-thin">
              <Link to="/">
                <img className="white-logo" src="assets/logo-white.png"/>
              </Link>
              <div className="nav-bar-link-container">
                <Link to={"/dashboard/"} className="nav-bar-link white-link">Home</Link>
                <Link to={"/account/"} className="nav-bar-link white-link">Account</Link>
              </div>
            </div>
          </div>

          <div className="cat-hero-container">
            <div className="cat-hero" style={heroStyle}>
              <div className="hero-text">
                <h1 className="cat-hero-header">{this.props.title}</h1>
                <p className="cat-hero-subtitle">{this.props.subtitle}</p>

              </div>
            </div>
          </div>
        </div>

      );
    }
  }
});
