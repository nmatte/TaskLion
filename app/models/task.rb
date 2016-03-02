# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  name        :string           not null
#  details     :json
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string           not null
#  img_url_big :string
#  img_url_sm  :string
#

class Task < ActiveRecord::Base
  belongs_to :category
  has_many :available_tasks
  has_many :taskers, through: :available_tasks
end
