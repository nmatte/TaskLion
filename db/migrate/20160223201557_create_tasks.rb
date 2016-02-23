class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :category_id, null: false
      t.string :name, null: false
      t.json :details

      t.timestamps null: false
    end

    add_reference :categories, index: true, foreign_key: true
  end
end
