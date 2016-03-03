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
      <ul className="search-bar-result-list">
        {taskLis}
      </ul>
    );
  }
});
