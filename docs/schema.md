# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
name            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
phone#          | string    |
<!-- move to own table? -->
card#           | string    |
card_expiration | int       |
security_code   | int       |
zip_code        | int       |

## tasker_profiles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
region_id       | integer   | not null, foreign key (references regions)
is_elite        | boolean   | not null, default: false
blurbs          | json      | not null
vehicles        | json      |
last_online     | datetime  | not null

## available_tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
task_id     | integer   | not null, foreign key (references tasks), indexed
tasker_id   | integer   | not null, foreign key (references tasker_profiles), indexed
blurb       | text      | not null
rate        | integer   | not null
schedule    | json      | not null

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key (references categories), indexed
name        | string    | not null, unique
details     | json      |

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
description | string    | not null

## regions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique


## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
task_id     | integer   | not null, foreign key (references tasks), indexed
client_id   | integer   | not null, foreign key (references users), indexed
tasker_id   | integer   | not null, foreign key (references tasker_profiles), indexed
address     | string    | not null
details     | json      |
description | text      | not null
date        | datetime  | not null
completed   | boolean   | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
booking_id  | integer   | not null, foreign key (references bookings), indexed
thumbs_up   | boolean   | not null
body        | text      | not null
