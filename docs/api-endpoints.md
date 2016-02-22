# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`
- `GET /account`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Categories

- `GET /api/categories`
- `POST /api/categories`
- `GET /api/categories/:id`
- `PATCH /api/categories/:id`
- `DELETE /api/categories/:id`


### Taskers

- `GET taskers/:id`
- `POST taskers`
- `PATCH taskers/:id`
- `GET tasks/:id/taskers/`
  - filter by location

### AvailableTasks

- `GET taskers/:id/available_tasks`
- `POST taskers/:id/`
- `DELETE taskers/:id/available_tasks/:id`
- `PATCH taskers/:id/available_tasks/:id`

### Tasks

- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Bookings

- `GET /bookings/new`
- `GET /api/bookings/:id`
- `DELETE /api/bookings/:id`
- `PATCH /api/bookings/:id`
- `POST /api/bookings`
- `GET /api/users/bookings`
  - for a client's bookings
- `GET /api/taskers/bookings`
  - for a tasker's bookings

### Reviews

- `GET /reviews/new`
- `GET /api/taskers/:id/reviews`
- `POST /api/reviews/`
- `PATCH /api/reviews/:id`
