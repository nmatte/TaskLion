# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create(
  name: "Featured",
  description: "View our most popular tasks."
)

deco = Category.create(
  name: "Decorating",
  description: "Let us help with all your decoration needs."
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

therapy = Category.create(
  name: "Therapy",
  description: "We'll make you feel refreshed and happy with these laid-back taskers."
)

Task.create(
  category: therapy,
  name: "Purring",
  description: "We'll soothe you to sleep with our cuddliest taskers."
)

Task.create(
  category: therapy,
  name: "Lap Sitting",
  description: "Keep yourself warm and your pants covered in cat hair."
)

Task.create(
  category: therapy,
  name: "Leg Rubbing",
  description: "Our expert taskers might even beg for treats."
)

Task.create(
  category: therapy,
  name: "Ignoring",
  description: "..."
)

hunting = Category.create(
  name: "Hunting",
  description: "Need a mouser? We've got some of the best hunters you'll find."
)

Task.create(
  category: hunting,
  name: "Mouse Removal",
  description: "We'll take care of those pesky critters!"
)

Task.create(
  category: hunting,
  name: "Bird Removal",
  description: "The bells come off for this one. That songbird outside your window won't pose a problem anymore."
)

Task.create(
  category: hunting,
  name: "Miscellaneous",
  description: "We can't guarantee we'll catch it, but we'll careen around your house as necessary."
)

protection = Category.create(
  name: "Protection",
  description: "Sleep tight knowing we're by your side.",
  img_url_big: "http://res.cloudinary.com/duwqltu7o/image/upload/c_fit,h_500,w_1920/v1456717708/6984608-cat-watching-outside_t849tf.jpg"
)

entertainment = Category.create(
  name: "Entertainment",
  description: "Never a dull moment with these taskers."
)

cleaning = Category.create(
  name: "Cleaning",
  description: "We'll leave your home spotless."
)

Task.create(
  category: cleaning,
  name: "Gardening",
  description: "Our teeth are great for slicing all manner of plants."
)

b = User.create(fname: "Breakfast", lname: "Frey", email: "breakfast@catmail.com",
  password: "password")
Tasker.create(user_id: b.id, blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853763/prof_windowsill_2_p2vfby.jpg')

m = User.create(fname: "Markov", lname: "Stark", email: "markov@catmail.com",
  password: "password")
Tasker.create(user_id: m.id, is_elite: true,  blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853761/prof_catstronaut_z1nt3q.jpg')

c = User.create(fname: "Curie", lname: "Stark", email: "curie@catmail.com",
  password: "password")
Tasker.create(user_id: c.id, is_elite: true,  blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853761/prof_closeup_mainecoon_zo1hi1.jpg')

g = User.create(fname: "Gizmo", lname: "Tully", email: "gizmo@catmail.com",
  password: "password")
Tasker.create(user_id: g.id, blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853762/prof_sleeping_pctdle.jpg')

a = User.create(fname: "Aslan", lname: "Lewis", email: "aslan@catmail.com",
  password: "password")
Tasker.create(user_id: a.id, is_elite: true,  blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853762/prof_lion_agdria.jpg')

gu = User.create(fname: "Guenhywar", lname: "Salvatore", email: "guen@catmail.com",
  password: "password")
Tasker.create(user_id: gu.id, blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853763/prof_tiger_jfvyts.jpg')

k = User.create(fname: "Kasha", lname: "Pendragon", email: "kasha@catmail.com",
  password: "password")
Tasker.create(user_id: k.id, is_elite: true,  blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456854037/prof_panther_fzk0ax.jpg')

mrs = User.create(fname: "Mrs", lname: "Bojangles", email: "bojangles@catmail.com", password: "password")
Tasker.create(user_id: mrs.id, is_elite: true, blurbs: {})

sarah = User.create(fname: "Sara", lname: "Cat", email: "sara@catmail.com", password: "password")
Tasker.create(user_id: sarah.id, blurbs: {})

larry = User.create(fname: "Larry", lname: "Chief Mouser", email: "larry@catmail.com", password: "password")
Tasker.create(user_id: larry.id, blurbs: {}, img_url_sm: 'http://res.cloudinary.com/duwqltu7o/image/upload/v1456853760/prof_chief_mouser_vmofqf.jpg')
def random_rate
  ((rand * 50) + 20).floor
end

def random_blurb
  blurbs = ["Prrrrt meow. (I strive for only the best in what I do. You'll never find a better match for this task.)",
  "Meow meow reow. (I'm quick and efficient. Service with a purr.)",
  "Meeeeeeeeeeeeeeeeeeooooow. (Whatever you need, I don't get it done. But I'll definitely get something done.)",
  "Zzzzzzzzzzzzzzzzzz. (Come back when it's not naptime.)",
  "(Is it naptime yet?)",
  "PrrrrrrrrrrrRrrrrRrrrrrr.",
  "*roar* (I wish I was out hunting.)",
  "(Can someone take this noisy thing off my collar?!)",
  "(It's been way too long since I licked myself.)",
  "*yawn* (It's nap o'clock, I think.)",
  "*hiss* (Don't scratch me there.)",
  "(Let me into the house so that I can immediately leave it.)",
  "(Let's play, go ahead and rub my belly--STOP RUBBING MY BELLY)",
  "Prrrt? (Not at all dedicated or caring. Very hungry though.)"]

  blurbs.sample
end

def random_task_id
  max_tasks = Task.count
  ids = (0..max_tasks-1).to_a.shuffle

  if ids.nil? || ids.length.zero?
    ids = (0..max_tasks-1).to_a.shuffle
  end
  ids.shift
end

non_taskers = []

20.times do
  u = User.create(fname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password: "password")
  non_taskers << u
end

Tasker.all.each do |cat|
  task_start = (rand * Task.count).floor
  9.times do |n|
    a = AvailableTask.create!(tasker_id: cat.id, task_id: (task_start + n) % Task.count + 1, blurb: random_blurb, rate: random_rate, schedule: {})
    booking_num = ((rand * 10).floor + 10)

    booking_num.times do |bk|
      b = Booking.create!(
        client_id: non_taskers.sample.id,
        tasker_id: cat.id,
        available_task_id: a.id,
        address: "placeholder st.",
        description: "you should never see this",
        date: Date.current.to_s
      )
      thumbs_up_down = rand < 0.97
      Review.create!(booking_id: b.id, thumbs_up: thumbs_up_down, body: "What a lovely cat")
    end
  end
end


#  id                :integer          not null, primary key
#  client_id         :integer          not null
#  tasker_id         :integer          not null
#  address           :string           not null
#  details           :json
#  description       :text             not null
#  date              :date             not null
#  is_complete       :boolean          default(FALSE), not null
#  available_task_id :integer          not null

User.create(fname: "Demo", lname: "User", email: "demo@tasklion.tech", password: "demo_password")
