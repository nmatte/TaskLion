class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :booking_id, null: false
      t.boolean :thumbs_up, null: false, default: true
      t.text :body, null: false

      t.timestamps null: false
    end

    add_reference :bookings, index: true, foreign_key: true
  end
end
