var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <li>
        {this.props.tasker.fname +" "+ this.props.tasker.lname}
      </li>
    );
  }
});
