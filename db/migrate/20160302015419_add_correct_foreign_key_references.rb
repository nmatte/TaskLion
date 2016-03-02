class AddCorrectForeignKeyReferences < ActiveRecord::Migration
  def change
    add_foreign_key :available_tasks, :taskers, index: true
    add_foreign_key :available_tasks, :tasks, index: true
    change_column :available_tasks, :tasker_id, :integer, index: true
    change_column :available_tasks, :task_id, :integer, index: true

    add_foreign_key :taskers, :users
  end
end
