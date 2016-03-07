# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)

Category.create!(
  name: "Featured", description: "View our most popular tasks.",
  img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070311/couch_sm_leudib.jpg",
  img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456890667/couch_la7nvw.jpg",
)
decos = [
  {name: "Couch Shredding", description: "For that shaggy look on your sofa.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070311/couch_sm_leudib.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456890667/couch_la7nvw.jpg", featured: true},
  {name: "Fragance Distribution", description: "Make your home smell wild with our expert scent distributors.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070311/fragrance_distribution_gpa10z.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456891041/fragrance_distribution_ls2zrg.jpg", featured: false},
  {name: "Blind Warping", description: "Tired of your blinds lining up perfectly? Our taskers can solve that within minutes.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070311/blinds_sm_h20jxo.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456890819/blinds_wznnfz.jpg", featured: false},
  {name: "Furniture Stress Testing", description: "You never know when your home decor is positioned precariously. We'll bring those weaknesses to your attention.", featured: false,
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070313/furniture_testing_sm_a3ga4r.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457057097/furniture_testing_bqlfrc.jpg"}
]

deco = Category.create!(
  name: "Decorating",
 description: "Let us help with all your decoration needs.",
 img_url_sm: decos[1][:img_url_sm],
 img_url_big: decos[1][:img_url_big]
 )

decos.each do |d|
  d[:category] = deco
  Task.create!(d)
end




therapies = [
  {name: "Purring", description: "We'll soothe you to sleep with our cuddliest taskers.", featured: true,
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070318/purr_sm_ityiva.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062955/purr_btpmfi.jpg"},
  {name: "Lap Sitting", description: "Keep yourself warm and your pants covered in cat hair.", featured: false,
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/c_scale,w_300/v1457070318/lap_sitting_sm_o1s9ur.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457057268/lap_sitting_oirzg6.jpg"},
  {name: "Leg Rubbing", description: "Our expert taskers might even beg for treats.", featured: true,
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070317/leg_rubbing_sm_lcqgoa.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062948/leg_rubbing_jeoti4.jpg"},
  {name: "Hugging", description: "We actually don't like hugs much but we'll put up with it, just for you.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070312/cat_with_girl_ux5xhh.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457057455/hugging_u32hp0.jpg"},
  {name: "Ignoring", description: "...", featured: false,
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070313/bored_cat_sm_txr7qc.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062929/bored-cat_au4per.jpg"}
]
therapy = Category.create!(
  name: "Therapy",
  description: "You'll feel refreshed and happy with these laid-back taskers.",
  img_url_sm: therapies[1][:img_url_sm],
  img_url_big: therapies[1][:img_url_big]
  )

therapies.each do |t|
  t[:category] = therapy
  Task.create!(t)
end



hunts = [
  {name: "Mouse Removal", description: "We'll take care of those pesky critters!",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070317/mouse_sm_kup5jr.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062948/mouse_kihr1v.jpg"},
  {name: "Bird Removal", description: "The bells come off for this one. That songbird outside your window won't pose a problem anymore.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457074016/bird_sm_iecxrv.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457074017/bird_rbq5vi.jpg"},
  {name: "Miscellaneous", description: "We can't guarantee we'll catch it, but we'll careen around your house as necessary.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070314/hunting_klpmd1.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457063109/hunting_o9xsft.jpg"},
  {name: "Fishing", description: "No aquarium is safe from our taskers.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457075031/fishing_sm_iv78bo.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456891239/fishing_c356kw.jpg"}
]
hunting = Category.create!(
  name: "Hunting",
  description: "Need a mouser? We've got some of the best hunters you'll find.",
  img_url_sm: hunts[2][:img_url_sm],
  img_url_big: hunts[2][:img_url_big]
)

hunts.each do |h|
  h[:category] = hunting
  Task.create!(h)
end



entertainments = [
  {name: "Parties", description: "Who needs clowns when you have cats?",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070316/parties_sm_ssyzse.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457063262/parties_vwuyky.jpg"}, #have pic
  {name: "Playing", description: "Get out your feathers and laser pointers!",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070318/playing_sm_wulecz.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457063346/playing_jdpdkk.jpg"},#have pic
  {name: "Bothering Other Cats", description: "What we do best.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070311/cat_on_cat_sm_krqy7u.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062932/cat_on_cat_usyden.jpg"} #have
]

entertainment = Category.create!(
  name: "Entertainment",
  description: "Never a dull moment with these taskers.",
  img_url_sm: entertainments[0][:img_url_sm],
  img_url_big: entertainments[0][:img_url_big],
)
entertainments.each do |h|
  h[:category] = entertainment
  Task.create!(h)
end



protections = [
  {name: "Invisible Threats", description: "Did you hear that? Of course not, you're a human.",
     img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070313/invisible_threats_sm_mxlo9k.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062937/invisible_threats_v6yipt.jpg"}, #have
  {name: "Window Watching", description: "We see everything. Plus, there's sunlight.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070319/window_watching_sm_a7oll7.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457063495/window_watching_fn0pcf.jpg"}, #have
  {name: "Loafing", description: "For when it's cold but we still need to watch for threats.",
    img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457070316/loaf_sm_iilgc9.jpg",
    img_url_big: "https://res.cloudinary.com/duwqltu7o/image/upload/v1457062949/loaf_yukoks.jpg"} #have
]
protection = Category.create!(
  name: "Protection",
  description: "Sleep tight knowing we're by your side.",
  img_url_sm: protections[1][:img_url_sm],
  img_url_big: protections[1][:img_url_big]
)
protections.each do |pr|
  pr[:category] = protection
  Task.create!(pr)
end

# cleaning = Category.create!(
#   name: "Cleaning",
#   description: "We'll leave your home spotless."
# )
#
# Task.create!(
#   category: cleaning,
#   name: "Gardening",
#   description: "Our teeth are great for slicing all manner of plants."
# )




b = User.create!(fname: "Breakfast", lname: "Frey", email: "breakfast@catmail.com",
  password: "password")
Tasker.create!(user_id: b.id, blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853763/prof_windowsill_2_p2vfby.jpg')

m = User.create!(fname: "Markov", lname: "Stark", email: "markov@catmail.com",
  password: "password")
Tasker.create!(user_id: m.id, is_elite: true,  blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853761/prof_catstronaut_z1nt3q.jpg')

c = User.create!(fname: "Curie", lname: "Stark", email: "curie@catmail.com",
  password: "password")
Tasker.create!(user_id: c.id, is_elite: true,  blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853761/prof_closeup_mainecoon_zo1hi1.jpg')

g = User.create!(fname: "Gizmo", lname: "Tully", email: "gizmo@catmail.com",
  password: "password")
Tasker.create!(user_id: g.id, blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853762/prof_sleeping_pctdle.jpg')

a = User.create!(fname: "Aslan", lname: "Lewis", email: "aslan@catmail.com",
  password: "password")
Tasker.create!(user_id: a.id, is_elite: true,  blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853762/prof_lion_agdria.jpg')

gu = User.create!(fname: "Guenhywar", lname: "Salvatore", email: "guen@catmail.com",
  password: "password")
Tasker.create!(user_id: gu.id, blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853763/prof_tiger_jfvyts.jpg')

k = User.create!(fname: "Kasha", lname: "Pendragon", email: "kasha@catmail.com",
  password: "password")
Tasker.create!(user_id: k.id, is_elite: true,  blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456854037/prof_panther_fzk0ax.jpg')

mrs = User.create!(fname: "Mrs", lname: "Bojangles", email: "bojangles@catmail.com", password: "password")
Tasker.create!(user_id: mrs.id, is_elite: true, blurbs: {}, img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456853760/prof_blinds_capogx.jpg")

sarah = User.create!(fname: "Sara", lname: "Cat", email: "sara@catmail.com", password: "password")
Tasker.create!(user_id: sarah.id, blurbs: {}, img_url_sm: "https://res.cloudinary.com/duwqltu7o/image/upload/v1456853764/prof_leaves_bxdwue.jpg")

larry = User.create!(fname: "Larry", lname: "Chief Mouser", email: "larry@catmail.com", password: "password")
Tasker.create!(user_id: larry.id, blurbs: {}, img_url_sm: 'https://res.cloudinary.com/duwqltu7o/image/upload/v1456853760/prof_chief_mouser_vmofqf.jpg')
def random_rate
  ((rand * 50) + 20).floor
end

def random_blurb
  blurbs = ["Prrrrt meow. I strive for only the best in what I do. You'll never find a better match for this task.",
  "Meow meow reow. I'm quick and efficient. Service with a purr.",
  "Meeeeeeeeeeeeeeeeeeooooow. Whatever you need, I probably won't get it done. But I'll definitely get something done.",
  "Zzzzzzzzzzzzzzzzzz. Come back when it's not naptime.",
  "Is it naptime yet?",
  "PrrrrrrrrrrrRrrrrRrrrrrr.",
  "*roar* I wish I was out hunting.",
  "Can someone take this noisy thing off my collar?!",
  "It's been way too long since I licked myself.",
  "*yawn* It's nap o'clock, I think.",
  "*hiss* Don't scratch me there.",
  "Let me into the house so that I can immediately leave it.",
  "Let's play, go ahead and rub my belly--STOP RUBBING MY BELLY",
  "Prrrt? Not at all dedicated or caring. Very hungry though.",
  "...Do I hear a can opening?",
  "Mreeeow reow meeeeeeeeeow. I know the trees in this area very well.",
  "... ... ... prrrrrrrrrrrr",
  "What the heck is that red dot thing?",
  "I am the night.",
  ]
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
  u = User.create!(fname: Faker::Name.first_name, lname: Faker::Name.last_name, email: Faker::Internet.email, password: "password")
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


User.create!(fname: "Demo", lname: "User", email: "demo@tasklion.tech", password: "demo_password")
