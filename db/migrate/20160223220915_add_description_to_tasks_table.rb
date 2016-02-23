class AddDescriptionToTasksTable < ActiveRecord::Migration
  def change
    add_column :tasks, :description, :string, null: false
  end
end
