var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {

    
    return (
      <div>
        <Link to={"/dashboard"}>Home</Link>
        <Link to={"/account"}>Account</Link>
      </div>
    );
  }
});
