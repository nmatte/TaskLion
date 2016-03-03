var React = require('react'),
    Account = require('./account'),
    Navbar = require('./nav_bar'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {

    return(
      <div>
        <div><Navbar/></div>
        {this.props.children}
        <div className="footer">
          <div className="footer-container">
            Footer!!<br/>
            Footer!!<br/>
            Footer!!<br/>
            Footer!!<br/>
            Footer!!<br/>
            Footer!!<br/>
          </div>
        </div>
      </div>
    );
  }
});
