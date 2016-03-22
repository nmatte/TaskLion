var React = require('react'),
    TaskerStore = require('../../stores/tasker'),
    TaskerIndexItem = require('./index_item'),
    TaskApiUtil = require('../../util/tasker_api_util');

module.exports = React.createClass({
  render: function () {
    var content = this.props.taskers.map(
      function (tasker, index) {
        return (
          <TaskerIndexItem
          key={index}
          tasker={tasker}
          taskId={this.props.taskId} onTaskerChoose={this.props.onTaskerChoose} />);
      }.bind(this)
    );
    return <div className="tasker-index">
            <ul>
              {content}
            </ul>
          </div>;
  }
});
