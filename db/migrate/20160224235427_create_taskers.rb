class CreateTaskers < ActiveRecord::Migration
  def change
    create_table :taskers do |t|
      t.integer :user_id, null: false
      t.boolean :is_elite, null: false, default: false
      t.json :blurbs, null: false
      t.json :vehicles
      t.timestamp :last_online

      t.timestamps null: false
    end

    add_reference :users, index: true, foreign_key: true
  end
end
