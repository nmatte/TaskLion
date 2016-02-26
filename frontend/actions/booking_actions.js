var Dispatcher = require('../dispatcher'),
    BookingConstants = require('../constants/booking_constants');

module.exports = {
  updateBooking: function (booking) {
    Dispatcher.dispatch({
      actionType: BookingConstants.UPDATE_BOOKING,
      booking: booking
    });
  }
};
