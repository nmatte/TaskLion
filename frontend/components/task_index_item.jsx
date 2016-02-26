var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    return (
      <li className="shadow task-item">
        <div className="task-image-container">
          <div className="task-image">
          </div>
        </div>
        <div className="task-content-container">
          <Link className="task-link" to={"/book/"}>
            <h2 className="task-header">
              {this.props.task.name}
            </h2>
          </Link>
          <p className="task-description">{this.props.task.description}</p>
          <Link className="blue-button" to={"/book/" + this.props.task.id}>Select Task</Link>
        </div>
      </li>
    );
  }
});
