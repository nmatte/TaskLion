var React = require('react'),
    BookingStore = require('../../stores/booking'),
    BookingActions = require('../../actions/booking_actions'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  _taskerClick: function (event) {
    event.preventDefault();

    BookingActions.updateBooking({
      tasker_id: this.props.tasker.id,
      available_task_id: this.props.tasker.available_task_id
    });
    this.props.history.push({
      pathname: "book/" + this.props.taskId + "/confirm",
      query: {available_task_id: this.props.tasker.available_task_id}
    });

  },

  render: function () {
    return <li className="shadow tasker-index-item">
            <div className="tasker-select-box">
              <img className="tasker-img" src={this.props.tasker.img_url_sm}/>
              <button
                className="tasker-select-button dark-blue-button"
                onClick={this._taskerClick}>
                Select & Continue
              </button>
              <Link className="blue-button" to={"/profile/" + this.props.tasker.id + "/tasks"}>Profile</Link>
            </div>
            <div className="tasker-index-item-content">
              <div className="tasker-index-item-top">
                <h3 className="tasker-name">{this.props.tasker.fname +" "+ this.props.tasker.lname}</h3>
                <div className="rate-badge"><strong>${this.props.tasker.rate}</strong>/hr</div>
              </div>
              <div className="tasker-blurb">
                <label>
                  <strong>
                    How I can help:
                  </strong>
                </label>
                  {this.props.tasker.blurb}
              </div>
            </div>
          </li>;
  }
});
