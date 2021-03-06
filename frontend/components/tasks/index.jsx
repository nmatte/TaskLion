var React = require('react'),
    CategoryStore = require('../../stores/category'),
    TaskIndexItem = require('./index_item'),
    ApiUtil = require('../../util/api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      category: CategoryStore.find(this.props.params.category_id)
    };
  },

  _onCategoryChange: function () {
    this.setState({
      category: CategoryStore.find(this.props.params.category_id)
    });
  },

  componentWillMount: function() {
    this.categoryListener = CategoryStore.addListener(this._onCategoryChange);
    ApiUtil.fetchSingleCategory(this.props.params.category_id);
  },

  componentWillUnmount: function() {
    this.categoryListener.remove();
    this.categoryListener = null;
  },

  componentWillReceiveProps: function(nextProps) {
    ApiUtil.fetchSingleCategory(this.props.params.category_id);
  },


  render: function () {
    var content = "Loading tasks...";
    if (this.state.category !== undefined && this.state.category.tasks !== undefined) {
      content = this.state.category.tasks.map(
        function (task, index) {
            return <TaskIndexItem task={task} key={index}/>;
        }
      );
    }
    return (
      <div className="task-body">
        <ul className="task-container">
          {content}
        </ul>
        <div className="marketing-col"></div>
      </div>
    );
  }
});
