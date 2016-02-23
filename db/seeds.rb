# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

deco = Category.create(
  name: "Decorating",
  description: "Let us help with all your decoration needs, from drape restructuring to adding new scents to your carpet."
)

Task.create(
  category: deco,
  name: "Couch Shredding",
  description: "For that shaggy look on your sofa."
)

Task.create(
  category: deco,
  name: "Fragance Distribution",
  description: "Make your home smell wild with our expert scent distributors."
)

Task.create(
  category: deco,
  name: "Blind Warping",
  description: "Tired of your blinds lining up perfectly? Our taskers can solve that within minutes."
)

Task.create(
  category: deco,
  name: "Furniture Stress Testing",
  description: "You never know when your home decor is positioned precariously. We'll bring those weaknesses to your attention."
)

Category.create(
  name: "Therapy",
  description: "We'll make you feel refreshed and happy with these laid-back taskers."
)

Category.create(
  name: "Hunting",
  description: "Need a mouser? We've got some of the best hunters you'll find."
)
