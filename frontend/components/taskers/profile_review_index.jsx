var React = require('react'),
    TaskerStore = require('../../stores/tasker'),
    Link = require('react-router').Link;

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
    var pageNum = parseInt(this.props.params.page_num);
    var sliceStart = (pageNum -1) * 10;
    var currentReviews = this.state.tasker.reviews.slice(sliceStart, sliceStart + 10);
    var nextLink = <Link to={"/profile/" + this.props.params.tasker_id + "/reviews/" + (pageNum + 1)}>Next</Link>;
    var prevLink = <Link to={"/profile/" + this.props.params.tasker_id + "/reviews/" + (pageNum - 1)}>Prev</Link>;
    if ((this.state.tasker.reviews.length / 10) < pageNum) {
      nextLink = <a></a>;
    }
    if (pageNum < 2) {
      prevLink = <a></a>;
    }
    var reviewLis = currentReviews.map(
      function (review, index) {
        return <li key={index}>{review.task_name}{review.id}{review.thumbs_up ? "true" : "false"} {review.body}</li>;
      }
    );
    return (
      <div className="content-container">
        <ul>
          {reviewLis}
        </ul>
        ReviewIndex:
        {this.state.tasker.reviews.length} Reviews
        {prevLink}
        {nextLink}
      </div>
    );
  }
});
