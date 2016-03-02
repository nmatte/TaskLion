class RemoveWeirdColumns < ActiveRecord::Migration
  def change
    remove_column :available_tasks, "{:index=>true, :foreign_key=>true}_id"
    remove_column :bookings, "{:index=>true, :foreign_key=>true}_id"
    remove_column :categories, "{:index=>true, :foreign_key=>true}_id"
    remove_column :taskers, "{:index=>true, :foreign_key=>true}_id"
    remove_column :tasks, "{:index=>true, :foreign_key=>true}_id"
    remove_column :users, "{:index=>true, :foreign_key=>true}_id"
  end
end
