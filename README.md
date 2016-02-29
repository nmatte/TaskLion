# TaskLion

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

TaskLion is a web application inspired by TaskRabbit and built using Ruby on Rails and React.js. TaskLion allows users to:

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

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Task and TaskCategory Models, API, basic APIUtil (1 day)

**Objective:** Tasks and categories can be read through the API. Users can modify account.

- [x] create `Task`, `TaskCategory` models
- [x] seed the database with a small amount of test data
- [x] CRUD API for tasks (`TasksController`, `CategoriesController`)
- [x] jBuilder views for tasks
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] create user account page


### Phase 3: Initial Styling (0.5 days)
**Objective:** Existing pages will look good.

- [x] position elements on the page
- [x] add basic colors & styles
- [x] style the homepage and add some static content

### Phase 4: Flux Architecture and Router; Tasker models (1 day)

**Objective:** Taskers and their AvailableTasks can be read through the API.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- [x] create Tasker model with seed data
- [x] create AvailableTasks model with seed data
- implement components for existing API
  - [x] `CategoryIndex`
  - [x] `CategoryIndexItem`
  - [x] `TaskIndex`
  - [x] `TaskIndexItem`
  - [x] `TaskerIndex`
  - [x] `TaskerIndexItem`

### Phase 5: Further Styling (1 day)
**Objective:** Components will look good.

- [x] style current components
- [x] add more static content to landing page

### Phase 5: Bookings (1.5 days)

**Objective:** Bookings are tasks assigned to a tasker at a given date.

- [x] create `Booking` model
- build out API, Flux loop, and components for:
  - [x] Booking CRUD
  <!-- TODO -->
  - [ ] Booking form with specialized options (e.g. some tasks ask if they need a car)
- [ ] Use CSS to style new views

### Phase 6: Tasker reviews (0.5 days)

**Objective:** Taskers can have reviews on their profile.

- build out API, Flux loop, and components for:
  - [ ] fetching tasker's reviews
  - [ ] getting review highlights
  - [ ] aggregating review data (e.g. "97% positive")
- [ ] Style new elements

### Phase 6: Tasker profiles (1 day)

**Objective:** Taskers have a full profile you can view.

- build out API, Flux loop, and components for:
  - [ ] fetching tasker's blurb
  - [ ] fetching associated reviews
- [ ] Style new elements

### Phase 7: Search (1 day)

**Objective:** Tasks can be searched.

- build out API, Flux loop, and components for:
  - [ ] searching for tasks
- [ ] Style new elements


### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Add regions that TaskLion is restricted to
- [ ] Some functionality for the tasker side
- [ ] quick assignment feature
- [ ] improve search?
- [ ] Extra cute pictures of cats
- [ ] responsive layout
- [ ] autocomplete location
- [ ] booking session (preserve after refresh)

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
[phase-eight]: ./docs/phases/phase8.md
