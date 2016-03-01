# == Schema Information
#
# Table name: tasks
#
#  id                                    :integer          not null, primary key
#  category_id                           :integer          not null
#  name                                  :string           not null
#  details                               :json
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  description                           :string           not null
#  {:index=>true, :foreign_key=>true}_id :integer
#

class Task < ActiveRecord::Base
  belongs_to :category
  has_many :available_tasks
  has_many :bookings
  has_many :taskers, through: :available_tasks
end
