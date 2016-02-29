var Dispatcher = require('../dispatcher'),
    BookingConstants = require('../constants/booking_constants'),
    StorageUtil = require('../util/storage_util');

module.exports = {
  updateBooking: function (booking) {
    StorageUtil.storeCurrentBooking(booking);
    var newBooking = StorageUtil.getCurrentBooking();
    Dispatcher.dispatch({
      actionType: BookingConstants.UPDATE_BOOKING,
      booking: newBooking
    });
  },

  fetchBooking: function () {
    var booking = StorageUtil.getCurrentBooking();
    Dispatcher.dispatch({
      actionType: BookingConstants.RECEIVE_BOOKING,
      booking: booking
    });
  }
};
