# == Schema Information
#
# Table name: users
#
#  id                                    :integer          not null, primary key
#  email                                 :string           not null
#  password_digest                       :string           not null
#  session_token                         :string
#  created_at                            :datetime         not null
#  updated_at                            :datetime         not null
#  lname                                 :string           not null
#  fname                                 :string           not null
#  {:index=>true, :foreign_key=>true}_id :integer
#

module UsersHelper
end
