class ImageUrls < ActiveRecord::Migration
  def change
    add_column :taskers,  :img_url_big, :string
    add_column :taskers,  :img_url_sm, :string
    add_column :tasks,  :img_url_big, :string
    add_column :tasks,  :img_url_sm, :string
    add_column :categories,  :img_url_big, :string
    add_column :categories,  :img_url_sm, :string
  end
end
