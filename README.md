# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

TaskCat is a web application inspired by TaskRabbit and built using Ruby on Rails and React.js. TaskCat allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create a user account
- [ ] Log in / Log out
- [ ] Search available tasks
- [ ] View task categories
- [ ] Request a task from a physical location (or virtual task)
- [ ] Specify a task description
- [ ] Choose a tasker
- [ ] View reviews of taskers
- [ ] View tasker profiles
- [ ] Book a task

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Task, Booking, Review Models; API, basic APIUtil (1 day)

**Objective:** Bookings and reviews can be created, read, edited and destroyed through the API. Tasks and taskers can be read.

- [ ] create `Task`, `Booking`, `Review` models
- [ ] extend `User` to include `Tasker` functionality
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for tasks (`TaskersController`, `TasksContoller` etc.)
- [ ] jBuilder views for tasks
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Task bookings can be created, read, edited, and destroyed through the user interface.
Tasker information can be read through the interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `TasksIndex`
  - [ ] `TaskIndexItem`
  - [ ] `BookingForm`
  - [ ] `TaskerReviewIndex`
  - [ ] `TaskerReviewItem`
- [ ] save Notes to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- [ ] create `Notebook` model
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for notebook
  - [ ] adding tags to notebook
  - [ ] creating tags while adding to notebooks
  - [ ] searching notebooks by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Notes (0.5 days)

**objective:** Enable complex styling of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through notes for blocks of text
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
