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

b = User.create(
  fname: "Breakfast",
  lname: "Frey",
  email: "breakfast@catmail.com",
  password: "password"
)

Tasker.create(
  user: b,
  blurbs: {}
)

m = User.create(
  fname: "Markov",
  lname: "Stark",
  email: "markov@catmail.com",
  password: "password"
)

Tasker.create(
  user: m,
  is_elite: true,
  blurbs: {}
)

c = User.create(
  fname: "Curie",
  lname: "Stark",
  email: "curie@catmail.com",
  password: "password"
)

Tasker.create(
  user: c,
  is_elite: true,
  blurbs: {}
)

g = User.create(
  fname: "Gizmo",
  lname: "Tully",
  email: "gizmo@catmail.com",
  password: "password"
)

Tasker.create(
  user: g,
  blurbs: {}
)

a = User.create(
  fname: "Aslan",
  lname: "Lewis",
  email: "aslan@catmail.com",
  password: "password"
)

Tasker.create(
  user: a,
  is_elite: true,
  blurbs: {}
)

gu = User.create(
  fname: "Guenhywar",
  lname: "Salvatore",
  email: "guen@catmail.com",
  password: "password"
)

Tasker.create(
  user: gu,
  blurbs: {}
)

k = User.create(
  fname: "Kasha",
  lname: "Pendragon",
  email: "kasha@catmail.com",
  password: "password"
)

Tasker.create(
  user: k,
  is_elite: true,
  blurbs: {}
)
