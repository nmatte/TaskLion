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
#

class Task < ActiveRecord::Base
  belongs_to :category
end
