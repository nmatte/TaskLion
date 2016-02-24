var React = require('react'),
    Account = require('./account'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    var acctLink = <Link to={"account"}>account</Link>;
    return(
      <div>
        {acctLink}
        {this.props.children}
      </div>
    );
  }
});
