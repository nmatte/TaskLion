class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true, indexed: true
      t.string :name, null: false
      t.string :password_digest, null: false
      t.string :session_token, unique: true, indexed: true

      t.timestamps null: false
    end
  end
end
