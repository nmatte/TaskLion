# Phase 1: Backend setup and User Authentication (0.5 days)

## Rails
### Models
* User
<!-- * Note -->

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
<!-- * Api::NotesController (create, destroy, index, show, update) -->

### Views
* users/new.html.erb
* session/new.html.erb
<!-- * notes/index.json.jbuilder
* notes/show.json.jbuilder -->

## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt (Gem)


<!-- I encountered a silly bug that I hadn't seen before. My user model was
failing validations when it shouldn't have. I had provided an attr_reader for
some of the model's attributes, i.e. :email, :fname, :lname.

The problem was that by specifying an attr_reader for these attributes,
I was overriding the ActiveRecord::Base version of these readers. Thus the
attr_readers were returning nil rather than the actual values. -->
