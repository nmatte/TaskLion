var React = require('react'),
    SearchBarResultsItem = require('./search_bar_results_item');

module.exports = React.createClass({
  render: function () {
    var taskLis = this.props.tasks.map(
      function (task, index) {
        return <SearchBarResultsItem key={index} task={task} />;
      }
    );

    return (
      <div>
        SearchBarResults
        <ul>
          {taskLis}
        </ul>
      </div>
    );
  }
});
