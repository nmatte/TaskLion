class ChangeBookings < ActiveRecord::Migration
  def change
    remove_column :bookings, :tasker_id
  end
end
