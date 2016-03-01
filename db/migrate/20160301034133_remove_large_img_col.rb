class RemoveLargeImgCol < ActiveRecord::Migration
  def change
    remove_column :taskers, :img_url_big
  end
end
