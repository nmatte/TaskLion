var React = require('react'),
    BookingStore = require('../../stores/booking'),
    TaskApiUtil = require('../../util/tasker_api_util'),
    ApiUtil = require('../../util/api_util'),
    TaskStore = require('../../stores/task'),
    History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      task: TaskStore.find(this.props.params.task_id)
    };
  },

  componentWillMount: function() {
    this.taskListener = TaskStore.addListener(this._onTaskChange);
    TaskApiUtil.fetchTask(this.props.params.task_id);
  },

  _onTaskChange: function () {
    this.setState({
      task: TaskStore.find(this.props.params.task_id)
    });
  },

  componentWillUnmount: function() {
    this.taskListener.remove();
  },

  _submit: function (event) {
    ApiUtil.postBooking(BookingStore.current());
    this.history.push("/dashboard");
  },

  render: function () {
    var content;
    if (this.state.task === undefined) {
      content = "Loading...";
    } else {
      content = (<div>
        <h1>
          {this.state.task.name}
        </h1>
        <p>Date: {BookingStore.current().date}</p>
        <p>Address: {BookingStore.current().address}</p>
        <p>Description: {BookingStore.current().description}</p>
        <p>Tasker: {BookingStore.current().tasker_id}</p>
        <p>User: {BookingStore.current().client_id}</p>
        <button onClick={this._submit}>Submit</button>
      </div>);
    }
    return (
      <div>
        {content}
      </div>
    );
  }


});
