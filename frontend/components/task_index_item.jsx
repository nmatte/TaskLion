var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (
      <li>
        <Link to={"/tasks/" + this.props.task.id}>{this.props.task.name}</Link>
        <br/>
        {this.props.task.description}
      </li>
    );
  }
});
