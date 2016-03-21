var React = require('react'),
    TaskerStore = require('../../stores/tasker'),
    TaskerApiUtil = require('../../util/tasker_api_util'),
    AvailableTaskIndex = require('./../available_task_index');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tasker: this._getTaskerFromStore()
    };
  },

  componentDidMount: function() {
    this.taskerListener = TaskerStore.addListener(this._onTaskerChange);
    TaskerApiUtil.fetchTasker(this.props.params.tasker_id);
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
    var tasker = this.state.tasker;
    if (tasker) {
      var style = (tasker !== undefined) ? {backgroundImage: 'url('+tasker.img_url_sm+')'} : {};
      var child = <div>Nothing to see here</div>;

        var content = (
          <div className="profile-main-container">
            <div className="profile-banner">
              <div className="profile-banner-content">
                <div className="tasker-img-circ" style={style}></div>
                <h2 className="profile-title"><strong>Hello, </strong>I'm {this.state.tasker.fname} {this.state.tasker.lname.slice(0,1)}.</h2>
              </div>
            </div>
            {this.props.children}
          </div>
        );

      return (
        <div>
          {content}
        </div>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
});
