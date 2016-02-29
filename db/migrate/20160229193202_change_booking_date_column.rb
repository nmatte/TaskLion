class ChangeBookingDateColumn < ActiveRecord::Migration
  def change
    change_column :bookings, :date, :date
  end
end
