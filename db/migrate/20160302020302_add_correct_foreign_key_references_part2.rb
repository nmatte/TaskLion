class AddCorrectForeignKeyReferencesPart2 < ActiveRecord::Migration
  def change
    add_foreign_key :bookings, :users, column: :client_id
    add_foreign_key :bookings, :available_tasks
    add_foreign_key :bookings, :taskers

    change_column :bookings, :tasker_id, :integer, index: true
    change_column :bookings, :client_id, :integer, index: true
    change_column :bookings, :available_task_id, :integer, index: true

    add_foreign_key :reviews, :bookings

    change_column :reviews, :booking_id, :integer, index: true

    # change_column :taskers, :user_id, index: true

    add_foreign_key :tasks, :categories
    # change_column :tasks, :category_id, index: true
  end
end
