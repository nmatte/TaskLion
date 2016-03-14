json.id user.id
json.email user.email
json.session_token user.session_token
json.fname user.fname
json.lname user.lname
json.bookings do
  json.array! user.bookings do |booking|
    json.partial! 'api/bookings/booking', booking: booking
  end
end
