var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({


  render: function () {
    if (this.props.mode === "opaque") {
      return <div className="nav-bar">
              <div className="nav-bar-thin">
                <Link to={"/dashboard/"}>
                  <img className="color-logo" src="https://res.cloudinary.com/duwqltu7o/image/upload/v1457116384/logo_lzzapk.png"/>
                </Link>

                <div className="nav-bar-link-container">
                  <Link to={"/account/" }
                    className="nav-bar-link">Account</Link>
                  <Link to={"/dashboard/"}
                    className="nav-bar-link">Home</Link>
                </div>
              </div>
            </div>;
    } else {
      var heroStyle = {background: "gray"};
      if (this.props.imgUrl) {
        var heroStyle = {backgroundImage: 'url('+ this.props.imgUrl+')'};
      }
      return <div className="thingy">
              <div className="nav-bar clear-nav-bar">
                <div className="nav-bar-thin">
                  <Link to="/">
                    <img className="white-logo" src="http://res.cloudinary.com/duwqltu7o/image/upload/v1457117270/logo-white_i7ui3x.png"/>
                  </Link>
                  <div className="nav-bar-link-container">
                    <Link to={"/account/"} className="nav-bar-link white-link">Account</Link>
                    <Link to={"/dashboard/"} className="nav-bar-link white-link">Home</Link>
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
            </div>;
    }
  }
});
