var React = require('react'),
    AvailableTaskIndexItem = require('./available_task_index_item'),
    TaskerStore = require('../stores/tasker');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tasker: this._getTaskerFromStore()
    };
  },

  componentDidMount: function() {
    this.taskerListener = TaskerStore.addListener(this._onTaskerChange);
  },

  componentWillUnmount: function() {
    this.taskerListener.remove();
  },

  _onTaskerChange: function () {
    this.setState({
      tasker: this._getTaskerFromStore()
    });
  },

  _getTaskerFromStore: function () {
    return TaskerStore.find(this.props.params.tasker_id);
  },

  render: function () {
    var items = this.state.tasker.available_tasks.map(function (task, index) {
      return <AvailableTaskIndexItem task={task} key={index}/>;
    });

    return (
      <div className="available-task-container">
        <ul className="tasker-task-list">
          {items}
        </ul>
      </div>
    );
  }
});
