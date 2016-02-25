var React = require('react'),
    TaskerStore = require('../stores/tasker'),
    TaskerIndexItem = require('./tasker_index_item'),
    TaskerApiUtil = require('../util/tasker_api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      taskers: TaskerStore.all()
    };
  },

  _onTaskersChange: function () {
    this.setState({
      taskers: TaskerStore.all()
    });
  },

  componentDidMount: function() {
    this.taskerListener = TaskerStore.addListener(this._onTaskersChange);
    TaskerApiUtil.fetchTaskers(this.props.params.task_id);
  },

  componentWillUnmount: function() {
    this.taskerListener.remove();
    this.taskerListener = null;
  },

  render: function () {
    console.log(this.state.taskers);
    var content = this.state.taskers.map(
      function (tasker, index) {
        return <TaskerIndexItem key={index} tasker={tasker} />;
      }
    );
    return (
      <div>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
});
