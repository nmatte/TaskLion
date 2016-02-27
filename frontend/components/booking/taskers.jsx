var React = require('react'),
    BookingStore = require('../../stores/booking'),
    TaskerStore = require('../../stores/tasker'),
    TaskStore = require('../../stores/task'),
    TaskerIndex = require('./../tasker_index'),
    TaskApiUtil = require('../../util/tasker_api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      taskers: TaskerStore.all(),
      task: TaskStore.find(this.props.params.task_id)
    };
  },

  _onTaskersChange: function () {
    this.setState({
      taskers: TaskerStore.all(),
      task: TaskStore.find(this.props.params.task_id)
    });
  },

  componentWillUnmount: function() {
    this.taskerListener.remove();
    this.taskerListener = null;
  },

  componentDidMount: function() {
    this.taskerListener = TaskerStore.addListener(this._onTaskersChange);
    TaskApiUtil.fetchTaskers(this.props.params.task_id);
    TaskApiUtil.fetchTask(this.props.params.task_id);
  },

  componentWillReceiveProps: function(nextProps) {
    TaskApiUtil.fetchTaskers(nextProps.params.task_id);
    TaskApiUtil.fetchTask(nextProps.params.task_id);
  },

  render: function () {
    console.log("BookingTaskers",this.state.taskers);
    return (
      <div className="col-container">
        <div>{this.state.task.name}</div>
        <br></br>
        <div><input type="date"></input></div>
        <br></br>
        <TaskerIndex taskers={this.state.taskers}/>
      </div>
    );
  }
});
