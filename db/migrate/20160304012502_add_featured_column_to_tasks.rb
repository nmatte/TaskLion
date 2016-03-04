class AddFeaturedColumnToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :featured, :boolean, default: false
  end
end
