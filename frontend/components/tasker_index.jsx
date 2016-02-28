var React = require('react'),
    TaskerStore = require('../stores/tasker'),
    TaskerIndexItem = require('./tasker_index_item'),
    TaskApiUtil = require('../util/tasker_api_util');

module.exports = React.createClass({
  render: function () {
    var content = this.props.taskers.map(
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