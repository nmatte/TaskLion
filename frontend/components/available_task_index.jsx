var React = require('react'),
    AvailableTaskIndexItem = require('./available_task_index_item');

module.exports = React.createClass({
  render: function () {
    var items = this.props.availableTasks.map(function (task, index) {
      return <AvailableTaskIndexItem task={task} key={index}/>;
    });

    return (
      <ul className="tasker-task-list">
        {items}
      </ul>
    );
  }
});
