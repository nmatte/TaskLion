class RemoveTaskIdColumn < ActiveRecord::Migration
  def change
    remove_column :bookings, :task_id
    add_column :bookings, :available_task_id, :integer, null: false

    add_reference :available_tasks, index: true, foreign_key: true
  end
end
