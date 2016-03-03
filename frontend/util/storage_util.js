module.exports = {
  storeCurrentBooking: function (booking) {
    if (booking.date)
      localStorage.setItem('booking_date', booking.date);
    if (booking.available_task_id)
      localStorage.setItem('booking_available_task_id', booking.available_task_id);
    if (booking.details)
      localStorage.setItem('booking_details', booking.details);
    if (booking.description)
      localStorage.setItem('booking_descr', booking.description);
    if (booking.address)
      localStorage.setItem('booking_addr', booking.address);
  },

  // date: date,
  // available_task_id: booking_params[:available_task_id],
  // details: params[:booking][:details],
  // description: booking_params[:description],
  // address: booking_params[:address]

  getCurrentBooking: function () {
    var booking = {};
    booking.date = localStorage.getItem('booking_date');
    booking.available_task_id = localStorage.getItem('booking_available_task_id');
    booking.details = localStorage.getItem('booking_details');
    booking.description = localStorage.getItem('booking_descr');
    booking.address = localStorage.getItem('booking_addr');

    return booking;
  },

  clearBooking: function () {
      localStorage.setItem('booking_date', "");
      localStorage.setItem('booking_available_task_id', "");
      localStorage.setItem('booking_tasker_id', "");
      localStorage.setItem('booking_client_id', "");
      localStorage.setItem('booking_details', "");
      localStorage.setItem('booking_descr', "");
      localStorage.setItem('booking_addr', "");
  }
};
