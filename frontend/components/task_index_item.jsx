var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (
      <li className="shadow task-item">
        <Link to={"/tasks/" + this.props.task.id}>
          <h2 className="task-header">
            {this.props.task.name}
          </h2>
        </Link>
        <p className="task-description"></p>
        <button className="blue-button">Select Task</button>
        {this.props.task.description}
      </li>
    );
  }
});
