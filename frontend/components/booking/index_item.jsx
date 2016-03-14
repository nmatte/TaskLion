var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    var bk = this.props.booking;
    var taskerName = bk.tasker_fname + " " + bk.tasker_lname[0] + ".";
    return (
      <div className="chance-the-wrapper">
        <div className="booking-item shadow">
          <Link to={"/profile/" + bk.tasker_id} className="booking-tasker-info">
            <img src={bk.tasker_avatar} className="tasker-avatar"/>
            <div className="booking-tasker-name">{taskerName}</div>
          </Link>
          <div className="booking-item-details">
            <h2>{bk.task_name}</h2>
            <p>Scheduled on {bk.booked_on}</p>
            <strong>Description</strong>
            <p>{bk.description}</p>
          </div>
        </div>
      </div>
    );
  }
});
