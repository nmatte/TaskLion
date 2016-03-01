# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160301034133) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "available_tasks", force: :cascade do |t|
    t.integer  "tasker_id",  null: false
    t.integer  "task_id",    null: false
    t.text     "blurb",      null: false
    t.integer  "rate",       null: false
    t.json     "schedule",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.integer  "task_id",                                               null: false
    t.integer  "client_id",                                             null: false
    t.integer  "tasker_id",                                             null: false
    t.string   "address",                                               null: false
    t.json     "details"
    t.text     "description",                                           null: false
    t.date     "date",                                                  null: false
    t.boolean  "is_complete",                           default: false, null: false
    t.datetime "created_at",                                            null: false
    t.datetime "updated_at",                                            null: false
    t.integer  "{:index=>true, :foreign_key=>true}_id"
  end

  add_index "bookings", ["client_id"], name: "index_bookings_on_client_id", using: :btree
  add_index "bookings", ["tasker_id"], name: "index_bookings_on_tasker_id", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name",                                  null: false
    t.string   "description",                           null: false
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.integer  "{:index=>true, :foreign_key=>true}_id"
    t.string   "img_url_big"
    t.string   "img_url_sm"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "booking_id",                null: false
    t.boolean  "thumbs_up",  default: true, null: false
    t.text     "body",                      null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "taskers", force: :cascade do |t|
    t.integer  "user_id",                                               null: false
    t.boolean  "is_elite",                              default: false, null: false
    t.json     "blurbs",                                                null: false
    t.json     "vehicles"
    t.datetime "last_online"
    t.datetime "created_at",                                            null: false
    t.datetime "updated_at",                                            null: false
    t.integer  "{:index=>true, :foreign_key=>true}_id"
    t.string   "img_url_sm"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer  "category_id",                           null: false
    t.string   "name",                                  null: false
    t.json     "details"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "description",                           null: false
    t.integer  "{:index=>true, :foreign_key=>true}_id"
    t.string   "img_url_big"
    t.string   "img_url_sm"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                 null: false
    t.string   "password_digest",                       null: false
    t.string   "session_token"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "lname",                                 null: false
    t.string   "fname",                                 null: false
    t.integer  "{:index=>true, :foreign_key=>true}_id"
  end

end
