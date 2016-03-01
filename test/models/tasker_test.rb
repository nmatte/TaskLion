# == Schema Information
#
# Table name: taskers
#
#  id                                    :integer          not null, primary key
#  user_id                               :integer          not null
#  is_elite                              :boolean          default(FALSE), not null
#  blurbs                                :json             not null
#  vehicles                              :json
#  last_online                           :datetime
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  {:index=>true, :foreign_key=>true}_id :integer
#  img_url_sm                            :string
#

require 'test_helper'

class TaskerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
