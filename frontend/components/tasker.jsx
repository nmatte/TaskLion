var React = require('react'),
    TaskerStore = require('./stores/tasker');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tasker: TaskerStore.find(this.props.params.tasker_id)
    };
  },

  render: function () {
    return (
      <div>
        {this.state.tasker.fname}
      </div>
    );
  }
});
