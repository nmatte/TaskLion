# == Schema Information
#
# Table name: available_tasks
#
#  id                                    :integer          not null, primary key
#  tasker_id                             :integer          not null
#  task_id                               :integer          not null
#  blurb                                 :text             not null
#  rate                                  :integer          not null
#  schedule                              :json             not null
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  {:index=>true, :foreign_key=>true}_id :integer
#

class AvailableTask < ActiveRecord::Base
  belongs_to :tasker
  belongs_to :task
  has_many :bookings
  has_many :reviews, through: :bookings

  validates :tasker, :task, presence: true
end
