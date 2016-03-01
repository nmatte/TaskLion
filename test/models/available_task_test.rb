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

require 'test_helper'

class AvailableTaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
