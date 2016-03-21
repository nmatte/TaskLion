var React = require('react'),
    BookingIndexItem = require('./index_item');

module.exports = React.createClass({
  render: function () {
    var bookingLis = this.props.bookings.map(
      function (item, index) {
        return <BookingIndexItem booking={item} key={index}/>;
      }
    );
    return (
      <div className="booking-index">
        <h3>Current Tasks</h3>
        {bookingLis}
      </div>
    );
  }
});
