var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({

  render: function () {
    return (
      <div className="tasker-task-row">
        <div className="tasker-task-info">
          <h3 className="task-title">
            {this.props.task.task_name}
          </h3>
          <p className="task-blurb">
            {this.props.task.blurb}
          </p>
        </div>
        <Link
          className="blue-button"
          to={"/book/" + this.props.task.task_id}>
          Select for ${this.props.task.rate}/hr
        </Link>
      </div>
    );
  }
});
