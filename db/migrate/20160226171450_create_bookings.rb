class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :task_id, null: false
      t.integer :client_id, null: false, index: true
      t.integer :tasker_id, null: false, index: true
      t.string :address, null: false
      t.json :details
      t.text :description, null: false
      t.datetime :date, null: false
      t.boolean :is_complete, null: false, default: false

      t.timestamps null: false
    end
  end
end
