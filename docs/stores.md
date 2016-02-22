# Flux Stores

### TaskerStore

Holds persisted date for taskers.

##### Actions:
- `receiveTaskers`
  - include reviews
- `receiveSingleTasker`
  - for all the tasker profile info

##### Listeners:
- `TaskersIndex`
- `TaskerDetail`

### BookingFormStore

Holds un-persisted note data to send to the API.

##### Actions:
- `receiveBookingFormParams`

##### Listeners:
- `BookingForm`

### TaskStore

Holds all persisted task data.

##### Actions:
- `receiveAllCategories`
- `receiveTasksForCategory`

##### Listeners:
- `CategoryIndex`
- `TaskIndex`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchTaskIndex`
