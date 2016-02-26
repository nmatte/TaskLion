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
        <div class="task-content-container">
          <Link className="task-link" to={"/tasks/" + this.props.task.id}>
            <h2 className="task-header">
              {this.props.task.name}
            </h2>
          </Link>
          <p className="task-description">{this.props.task.description}</p>
          <a className="blue-button">Select Task</a>

        </div>
      </li>
    );
  }
});
