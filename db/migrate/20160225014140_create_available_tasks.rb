class CreateAvailableTasks < ActiveRecord::Migration
  def change
    create_table :available_tasks do |t|
      t.integer :tasker_id, null: false
      t.integer :task_id, null: false
      t.text :blurb, null: false
      t.integer :rate, null: false
      t.json :schedule, null: false

      t.timestamps null: false
    end

    add_reference :taskers, index: true, foreign_key: true
    add_reference :tasks, index: true, foreign_key: true

  end
end
