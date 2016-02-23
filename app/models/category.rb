# == Schema Information
#
# Table name: categories
#
#  id                                    :integer          not null, primary key
#  name                                  :string           not null
#  description                           :string           not null
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  {:index=>true, :foreign_key=>true}_id :integer
#

class Category < ActiveRecord::Base
  has_many :tasks
end
